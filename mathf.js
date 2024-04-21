function outputResult(){
	var zf=document.getElementById('number1').value;
	var dg=document.getElementById('number2').value;
	var sj=document.getElementById('numberm').value;
	var zhk=document.getElementById('number3').value;
	var zbk=document.getElementById('number4').value;
	var zdiank=document.getElementById('number5').value;
	var zduk=document.getElementById('number6').value;
	var zgk=document.getElementById('number7').value;
	var zak=document.getElementById('number8').value;
	
	var x1=zhk;
	var x2=zbk;
	var x3=zdiank;
	var x4=zduk;
	var x5=zgk;
	var x6=zak;
	var a=zf;
	var m=sj;
	
	var b;
	if(dg==0){
		b=1;
	}else{
		b=dg;
	}
	
	
	var c = a / 1 + b / 1; 
	var jm = 1-m/100;
	var zfang = (b / c)*jm/1;
	
	var hfang=zfang*(25/(25+x1/1));
	var bfang=zfang*(25/(25+x2/1));
	var dianfang=zfang*(25/(25+x3/1));
	var dufang=zfang*(25/(25+x4/1));
	var gfang=zfang*(25/(25+x5/1));
	var afang=zfang*(25/(25+x6/1));
	
	var outputnumber1=document.getElementById('outputgetshanghaibfb');
	outputnumber1.innerText=zfang;
	var outputnumber2=document.getElementById('outputgethuokang');
	outputnumber2.innerText=hfang;
	var outputnumber3=document.getElementById('outputgetbingkang');
	outputnumber3.innerText=bfang;
	var outputnumber4=document.getElementById('outputgetdiankang');
	outputnumber4.innerText=dianfang;
	var outputnumber5=document.getElementById('outputgetdukang');
	outputnumber5.innerText=dufang;
	var outputnumber6=document.getElementById('outputgetguangkang');
	outputnumber6.innerText=gfang;
	var outputnumber7=document.getElementById('outputgetankang');
	outputnumber7.innerText=afang;
}