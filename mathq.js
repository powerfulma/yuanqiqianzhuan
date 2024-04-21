var c
//武器选择
function toggleInputBox(){
	var chance=document.getElementById('cdw');
	if(chance.value==='1'){
		c=1.125;
	}else if(chance.value==='2'){
		c=1;
	}else if(chance.value==='3'){
		c=0.875;
	}else if(chance.value==='4'){
		c=1;
	}else if(chance.value==='5'){
		c=0.125;
	}else if(chance.value==='6'){
		c=0.75;
	}else if(chance.value==='7'){
		c=1.125;
	}else if(chance.value==='8'){
		c=1;
	}else if(chance.value==='9'){
		c=1.125;
	}else if(chance.value==='10'){
		c=1;
	}else{
		c=1.5;
	}
}

function outputResult(){
	//输入值赋值
	var cd=document.getElementById('cd').value;
	var cdc=document.getElementById('cdc').value;
	//分类赋值
	var a=cd/1;
	var b=cdc/1;
	var d=c/1;
	//赋值计算
	var cdlast=d*(a/(1+b/100));
	//结果显示
	var outputnumber1=document.getElementById('outputcd');
	outputnumber1.innerText=cdlast;
}