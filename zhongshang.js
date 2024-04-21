function toggleInputBox(){
	var chance=document.getElementById('chance');
	var xuanze=document.getElementById('xuanze');
	if(chance.value==='true'){
		xuanze.style.display='block';
	}else{
		xuanze.style.display='none';
	}
}

function outputResult(){
	// 各类赋值
	var jc=document.getElementById('number1').value;
	var bz=document.getElementById('number2').value;
	var bjj=document.getElementById('chancet').value;
	var gj=document.getElementById('number4').value;
	var qt=document.getElementById('number5').value;
	var ew=document.getElementById('number6').value;
	// 分类赋值
	var a=bz/100
	var b=1+gj/100
	var c=1+qt/100
	var d=1+ew/100
	var ph
	if (chance.value==='true') {
		ph=bjj/100
	}else{
		ph=1
	}
	// 计算结果
	var jzsh=jc*a*ph*b*c
	var zsh=jc*a*ph*b*c*d
	// 结果展示
	var outputnumber1=document.getElementById('outputjizhong');
	outputnumber1.innerText=jzsh;
	var outputnumber2=document.getElementById('outputzong');
	outputnumber2.innerText=zsh;
}