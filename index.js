Numeric Input chiller1
Numeric Input chiller2
Numeric Input chiller3

Numeric Input bbTFL1
Numeric Input bbTFL2

Numeric Input bagp1Status
Numeric Input bagp2Status
Numeric Input bagp3Status

Numeric Input bagp1Falha
Numeric Input bagp2Falha
Numeric Input bagp3Falha

Numeric Input bagp1Runtime 	//RUNTIME CALCULADO EM DIAS
Numeric Input bagp2Runtime
Numeric Input bagp3Runtime

Numeric Output bagp1Comando 
Numeric Output bagp2Comando
Numeric Output bagp3Comando

Numeric aux1	//AUXILIARES NECESSÁRIOS POR NÃO HAVER ELSE IF NESSE COMPILADOR
Numeric aux2
Numeric aux3

Numeric runtimeMinimo

//ZERA O COMANDO SE HOUVER FALHA
if bagp1Falha = on then
	bagp1Comando = off 
endif 
if bagp2Falha = on then 
	bagp2Comando = off 
endif 
if bagp3Falha = on then 
	bagp3Comando = off 
endif 

aux1 = 0 
aux2 = 0 
aux3 = 0 	

//STATEMENT PRINCIPAL. SE NÃO FOR ATENDIDO, BYPASSA A LÓGICA INTEIRA 
if (((chiller1 = on & chiller2 = off & chiller3 = off) ! (chiller1 = off & chiller2 = on & chiller3 = off) ! (chiller1 = off & chiller2 = off & chiller3 = on)) & (bbTFL1 = on ! bbTFL2 = on)) then

//---------------------------------------------------------------------------------------------------
	if (chiller1 = on) then
	runtimeMinimo = Minimum(bagp2Runtime, bagp3Runtime) 

		if(runtimeMinimo = bagp2Runtime & bagp2Falha = off & bagp2Status = off) then 
			bagp2Comando = on 
			bagp3Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp3Runtime & bagp3Falha = off & bagp3Status = off) then 
				bagp3Comando = on
				bagp2Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp2Falha = off & bagp2Status = off) then
				bagp2Comando = on 
				bagp3Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp3Falha = off & bagp3Status = off) then 
				bagp3Comando = On
				bagp2Comando = Off
			endif
		endif

	endif
//---------------------------------------------------------------------------------------------------
	if (chiller2 = on) then
	runtimeMinimo = Minimum(bagp1Runtime, bagp3Runtime) 

		if(runtimeMinimo = bagp1Runtime & bagp1Falha = off & bagp1Status = off) then 
			bagp1Comando = on 
			bagp3Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp3Runtime & bagp3Falha = off & bagp3Status = off) then 
				bagp3Comando = on
				bagp1Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp1Falha = off & bagp1Status = off) then
				bagp1Comando = on 
				bagp3Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp3Falha = off & bagp3Status = off) then 
				bagp3Comando = On
				bagp1Comando = Off
			Endif
		endif

	endif
//--------------------------------------------------------------------------------------------------
	if (chiller3 = on) then
	runtimeMinimo = Minimum(bagp1Runtime, bagp2Runtime) 

		if(runtimeMinimo = bagp1Runtime & bagp1Falha = off & bagp1Status = off) then 
			bagp1Comando = on 
			bagp2Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp2Runtime & bagp2Falha = off & bagp2Status = off) then 
				bagp2Comando = on
				bagp1Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp1Falha = off & bagp1Status = off) then
				bagp1Comando = on 
				bagp2Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp2Falha = off & bagp2Status = off) then 
				bagp2Comando = On
				bagp1Comando = Off
			endif
		endif
endif
//---------------------------------------------------------------------------
else
    bagp1Comando = Off
	bagp2Comando = Off
    bagp3Comando = Off
endif
