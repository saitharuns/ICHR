var pos=0,cor=0,board,choice,qus,A,B,C;

var questions =[
	["Indian constitution came into force on","26th  jan 1950 ","26th nov 1940","15th aug 1947","26th oct 1949","A"],
/*	["The chairman of the constituent assembly was","Dr .B.R.Ambedkar ","Rajendra Prasad","Pandit Nehru","Mahatma Gandhi","B"],
	["Who among the following appointed the Governor of the states in India?","The Prime Minister"," The Parliament"," The Chief Ministers"," The President","D"],
	["How many Schedules are contained in the Constitution of India?","12 schedules","20 schedules","10 schedules","25 schedules","A"],
	["Who is empowered to declare National Emergency?","Prime Minister of India ","President","Governors of State","Parliament","B"],
	["Who appointed the Chief Justice and Other Judges of the Supreme Court of India?","Prime Minister of India",". The Governor of the concerning State","The C.M of the concerned State","President of India","D"],
	[" The Fundamental Duties were included in the Constitution of India by which of the following Amendment Act?","40th Amendment Act"," 44th Amendment Act","43rd Amendment Act","42nd Amendment Act","D"],
	[" The Fundamental Duties are mentioned in:","Part-IV A","Part-IV","Part-III","In schedule IV-A","A"],
	[" Which of the following Article of the Indian Constitution contains Fundamental Duties?","45 A","51 A","42",",30B","B"],
	[" Which Article of the Indian Constitution abolishes Untouchability?","Article 18","Article 15","Article 14","Article 17","D"],
	[" In which part of the Indian Constitution, the Fundamental Rights are provided?","Part II","Part III","Part V","Part IV","B"],
	[" Who is the current chairman of the National Human Rights Commission?","Justice A.S. Anand","Justice H.L. Dattu","Justice S. Rajendra Babu","Justice K. Balakrishnan","B"],
	[" Where is the headquarters of the National Human Rights Commission?","Delhi","Mumbai","Ahmedabad","Kolkata","A"],
	[" National Human Rights Commission is a ","Statutory body","Constitutional body","Multilateral institution","Both a and c","D"],
	[" Which of the following words has not been written in the preamble of the Indian Constitution?","Sovereign","Socialist","Democratic","Indians","D"],
	[" K.M. Munshi was related to......","Constitution draft committee","Preamble Committee","Public Accounts Committee","None of the following","A"],
	[" Which year is related to the Berubari Case?","1972","1976","1970","1960","D"],
	[" What is the true meaning of Secular?","All religions are equal in the eyes of the government","Special importance to a religion related to minorities","One religion is promoted by the government","None of the following","A"],
	[" What is the meaning of social equality in the Indian Constitution?","Lack of opportunities","Lack of equality","Equal opportunities for all sections of the societies","None of the following","C"],
	[" Who among the following said that the preamble of the Indian Constitution is The Keynote of the Constitution ?","Ernest Barker","Jawaharlal Nehru","Dr. Ambedkar","Nelson Mandela","A"],
	["10th schedule of the Constitution was added by which amendment of the constitution?","24th Amendment Act	","52nd Amendment Act","61st Amendment Act","85th Amendment Act","B"],
	["What is the minimum age prescribed by the Constitution of India for a candidate to be elected as Vice president of India? ","18 years","25 years","30 years","35 years","D"],
	["First session of Lok Sabha was held in which among the following years?","1950","1951","1952","1953","C"],
	["Who is the chief executive head of the state? ","Cheif Minister","Governor","President","None of the above","A"],
	["Who among the following was the vice president of the executive council in the Interim Government 1946-47?","Moti Lal Nehru","Pandit Jawaharlal Nehru","Sardar Patel","C Rajgopalachari","B"],
	["Which among the following fundamental rights has been to subject to maximum litigation after inauguration of the Constitution of India?","Right to Freedom","Right to Constitutional remedies","Right to Property","Right against exploitation","C"],
	["Which of the following was the first Speaker of Lok Sabha? ","V.V. Giri","Dr. Rajendra Prasad ","B.d. Jatti","G.V.Mavalankar", "D"],
	["What is the criteria for allocation of seats in Lok Sabha?","Area","Language","Poverty","Population","D"],
	["Who can make regulations for the peace, progress and good government of the Union Territories?","The Parliament","The Cabinet","The Prime Minister","The President","D"],
	["The family courts are established by state governments in consultation with?","Supreme Court","Cheif Justice of India ","High court","Cabinet","C"],
	["What is the maximum age till which the chairman and members of the State Public Service Commission can hold office?","60","62","65","70","B"],
	["In how many categories the public services (civil services or government services) in India are classified?","2","3","4","5","B"],
	["Who appoints the chairman of National Commission for Scheduled Tribes?","Parliament","President","Rajya Sabha","Governor","B"],
	["Who appoints the advocate general of the state?","President","Parliament","Prime Minister","Governor","D"],
	["Which type of body was the Planning Commission of India?","Constitutional body","Extra constitutional body","Statotory body","None of the above","B"],
	["When was Central Bureau of Investigation (CBI) set up?","1947","1963","1950","1962","B"],
	["Who appoints the Central Vigilance Commissioner?","President","Parliament","Supreme court","Speaker","A"],
	["The Arms Act was enacted by the Parliament of India in which year?","1958","1959","1960","1961","B"],
	["Wildlife Protection Act was enacted in which year?","1970","1972","1975","1986","B"],
	["Who among the following was appointed the head of the first committee to design a GST model?","Vijay Kelkar","Asim Dasgupta","Pranab Mukerjee","V.P.Singh","B"],
*/	];

	function Displayquestion()
	{
		board=document.getElementById("board");
		if(pos>=questions.length)
		{
			board.innerHTML="<p class='p2 p3'> You got "+cor+" of "+questions.length;
			board.innerHTML+="<a href='https://drive.google.com/file/d/1upr4aODv3lh9PkTQUcroGh-7uLRqZhYC/view?usp=sharing'<button class='button1'>download Answer</button></a>";
			
			document.getElementById("status").innerHTML="<p class='qc'> Quiz completed";
			
			pos=0;
			cor=0;
			return false;
		}
		document.getElementById("status").innerHTML="<div class='p1'> Question "+(pos+1)+" of "+questions.length;
		qus=questions[pos][0];
		A=questions[pos][1];
		B=questions[pos][2];
		C=questions[pos][3];
		D=questions[pos][4];
		
		board.innerHTML="<h3 class='qus'>"+qus+"</h3>";
		board.innerHTML+="<br><label><input type='radio' class='option-input radio' name='choices' value='A'>"+A+"</label>"+"<br>";
		board.innerHTML+="<label><input type='radio' class='option-input radio' name='choices' value='B'>"+B+"</label>"+"<br>";	
		board.innerHTML+="<label><input type='radio' class='option-input radio' name='choices' value='C'>"+C+"</label>"+"<br>";
		board.innerHTML+="<label><input type='radio' class='option-input radio' name='choices' value='D'>"+D+"</label>"+"<br>";
		
		board.innerHTML+="<button class='button ' onclick='checkAnswer()'>Submit answer</button>";
	}
	function checkAnswer()
	{
		var choice;
		choices=document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++)
		{
			if(choices[i].checked)
			{
				choice=choices[i].value;
			}
		}
		if(choice==questions[pos][5])
		{
			cor++;
		}
		pos++;
		Displayquestion();
	}

	Displayquestion();