Numeric Input chiller1, chiller2, chiller3, bbTFL1, bbTFL2, bagp1CLR, bagp2CLR, bagp3CLR, bagp1Falha, bagp2Falha, bagp3Falha, bagp1Runtime,bagp2Runtime, bagp3Runtime
Numeric Output bagp1Comando, bagp2Comando, bagp3Comando
Numeric aux1, aux2, aux3, runtimeMinimo 'RUNTIME CALCULADO EM DIAS --- AUX NECESSÁRIOS POR NÃO HAVER ELSE IF NESSE COMPILADOR  

'---------------------------------------------------------------------------------------------------
aux1 = 0 
aux2 = 0 
aux3 = 0 	
'---------------------------------------------------------------------------------------------------
'STATEMENT PRINCIPAL, SE NÃO FOR ATENDIDO BYPASSA TODA A LÓGICA
if (((chiller1 = on & chiller2 = off & chiller3 = off) ! (chiller1 = off & chiller2 = on & chiller3 = off) ! (chiller1 = off & chiller2 = off & chiller3 = on)) & (bbTFL1 = on ! bbTFL2 = on)) then
	
	if (chiller1 = on) then 
		runtimeMinimo = Minimum(bagp2Runtime, bagp3Runtime) 

		if(runtimeMinimo = bagp2Runtime & bagp2Falha = off & bagp2CLR = off) then 
			bagp2Comando = on 
			bagp3Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp3Runtime & bagp3Falha = off & bagp3CLR = off) then 
				bagp3Comando = on
				bagp2Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp2Falha = off & bagp2CLR = off) then
				bagp2Comando = on 
				bagp3Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp3Falha = off & bagp3CLR = off) then 
				bagp3Comando = On
				bagp2Comando = Off
			endif
		endif

		if (bagp2Falha = on & bagp3Falha = on) ! (bagp2CLR = on & bagp3CLR = on) Then
			bagp2Comando = off 
			bagp3Comando = off 
		endif		

	endif
'------------------------------------------------------------
	if (chiller2 = on) then
	runtimeMinimo = Minimum(bagp1Runtime, bagp3Runtime) 

		if(runtimeMinimo = bagp1Runtime & bagp1Falha = off & bagp1CLR = off) then 
			bagp1Comando = on 
			bagp3Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp3Runtime & bagp3Falha = off & bagp3CLR = off) then 
				bagp3Comando = on
				bagp1Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp1Falha = off & bagp1CLR = off) then
				bagp1Comando = on 
				bagp3Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp3Falha = off & bagp3CLR = off) then 
				bagp3Comando = On
				bagp1Comando = Off
			Endif
		endif

		if (bagp1Falha = on & bagp3Falha = on) ! (bagp1CLR = on & bagp3CLR = on) Then
			bagp1Comando = off 
			bagp3Comando = off 
		endif		

	endif
'------------------------------------------------------------
	if (chiller3 = on) then
	runtimeMinimo = Minimum(bagp1Runtime, bagp2Runtime) 

		if(runtimeMinimo = bagp1Runtime & bagp1Falha = off & bagp1CLR = off) then 
			bagp1Comando = on 
			bagp2Comando = off
		else 
			aux1 = 1
		endif
						     
		if aux1 > 0 then
			if (runtimeMinimo = bagp2Runtime & bagp2Falha = off & bagp2CLR = off) then 
				bagp2Comando = on
				bagp1Comando = off
			else 
				aux2 = 1
			endif 
		endif
			    
		if aux2 > 0 then
			if (bagp1Falha = off & bagp1CLR = off) then
				bagp1Comando = on 
				bagp2Comando = off
		  else
				aux3 = 1
			endif 	
		endif
			
		if aux3 > 0 Then	
			if (bagp2Falha = off & bagp2CLR = off) then 
				bagp2Comando = On
				bagp1Comando = Off
			endif
		endif

		if (bagp1Falha = on & bagp2Falha = on) ! (bagp1CLR = on & bagp2CLR = on) Then
			bagp1Comando = off 
			bagp2Comando = off 
		endif		

	endif
'---------------------------------------------------------------------------------------------------
else
		bagp1Comando = Off
		bagp2Comando = Off
		bagp3Comando = Off
endif
