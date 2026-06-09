# Utvikling
	- ## nextjs
- # Drift
	- netverks skisse her er et nettversk skisse til denne bedriften som kan bli utvidey på segnere
	  ![logseq_Netverks skisse.png](assets/logseq_Netverks_skisse_1781006621642_0.png)
	- Får å få dette up settet trenger du først dette på svitsjen som er over bedriftene
	  ```
	  enable
	     config term
	     vlan 10
	     name bedrift_1
	     vlan 20
	     name bedrift_2
	     exit
	     
	     int fa0/1
	     switchport mode access
	     switchport access vlan 10
	     
	     int fa0/2
	     switchport mode access
	     switchport access vlan 20
	     
	     int fa0/24
	     switchport mode trunk
	  
	    ip access-list extended BLOCK_VLANS
	     deny ip 10.1.10.0 0.0.0.255 10.1.20.0 0.0.0.255
	     deny ip 10.1.20.0 0.0.0.255 10.1.10.0 0.0.0.255
	     permit ip any 10.1.30.0 0.0.0.255
	  ```
	- cisco oppset visning:
	  ![Screenshot_20260609_150732.png](assets/Screenshot_20260609_150732_1781010506079_0.png)
	  ![Screenshot_20260609_150903.png](assets/Screenshot_20260609_150903_1781010563199_0.png)
	  ![Screenshot_20260609_151247.png](assets/Screenshot_20260609_151247_1781010803721_0.png)
	-
- # Brukerstøte
	- ## Bruker i AD
	  collapsed:: true
		- Først gå til bruker og datamaskiner eller users and cumputer på engelsk.
		  ![Screenshot_20260609_124656.png](assets/Screenshot_20260609_124656_1781002127417_0.png)
		- Så går du til Dit domene I me\it tilfele er det test.local so til user mappen som er under eller bruker vist du bruker norsk.
		  ![Screenshot_20260609_125028.png](assets/Screenshot_20260609_125028_1781002340453_0.png)
			- Så går du til de små iconene på toppen og finner den enne personen med en sol fåran seg
			  ![Screenshot_20260609_125401.png](assets/Screenshot_20260609_125401_1781002487308_0.png)
			- Så setter du in fornavn og login navn er de eneste som trengs nå man vist det er en onklig person leg til alt.
			  ![Screenshot_20260609_125701.png](assets/Screenshot_20260609_125701_1781002705107_0.png)
			- Så et enkelt passord som du kan gi til personen som kommer til og loge seg in og etter på kan endre det selv.
			  id:: 6a27f21a-b88a-4f2c-8b4a-3a663194cb5b
			  ![Screenshot_20260609_130011.png](assets/Screenshot_20260609_130011_1781002889858_0.png)
		- Det er også viktig og huske på have som er krav til passord til når man skal legge den til.
	- ## Mappe og fil tilgang AD
		- Først oppner du filleser
		  ![Screenshot_20260609_131906.png](assets/Screenshot_20260609_131906_1781003997115_0.png)
		- Så finner du denne pcen
		  ![Screenshot_20260609_132023.png](assets/Screenshot_20260609_132023_1781004109030_0.png)
		- Så åpner du pcen slik:
		  ![Screenshot_20260609_132216.png](assets/Screenshot_20260609_132216_1781004248372_0.png)
		- Så lager du en new mappe og kall det va som helst
		  ![Screenshot_20260609_132751_1781004715605_0_1781004800699_0.png](assets/Screenshot_20260609_132751_1781004715605_0_1781004800699_0_1781004864014_0.png)
		- Så gå til propertise eller egenskaper på norsk
		  ![Screenshot_20260609_133521.png](assets/Screenshot_20260609_133521_1781005077887_0.png)
		- Så sharing eller deling også til avansert deller aler advansed sharing
		  ![Screenshot_20260609_134952.png](assets/Screenshot_20260609_134952_1781006115646_0.png)
		- Så er resten dit med hvam som har tilgang og ikke.
		  ![Screenshot_20260609_135559.png](assets/Screenshot_20260609_135559_1781006201907_0.png)
		- Så ok vist du ikke skal skyfte noe
		  ![Screenshot_20260609_135707.png](assets/Screenshot_20260609_135707_1781006283451_0.png)
		- Det var alt så er du good
		  ![Screenshot_20260609_135843.png](assets/Screenshot_20260609_135843_1781006422605_0.png)