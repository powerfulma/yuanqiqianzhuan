function outputResult(){
	var a=document.getElementById('number1').value;
	var b=document.getElementById('number2').value;
	var c=document.getElementById('number3').value;
	var li=(a/1+b/1)/3;
	var fq=c/3;
	var d=li-fq
	if(d>=0){
		e=li;
		f=fq;
	}else{
		e=fq;
		f=li;
	}
	var hh=(e/1+3*f/1)/2
	
	var outputnumber1=document.getElementById('outputliliang');
	outputnumber1.innerText=li;
	var outputnumber2=document.getElementById('outputfaqiang');
	outputnumber2.innerText=fq;
	var outputnumber3=document.getElementById('outputhunhe');
	outputnumber3.innerText=hh;
}