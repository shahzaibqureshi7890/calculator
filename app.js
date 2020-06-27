function abc()
{
    
    var result=document.getElementById("result");

    result.style.backgroundColor='yellow';
    
    result.style.textAlign='right';
     
}


function efg()
{
    
    var result=document.getElementById("result");

    result.style.backgroundColor='';
    
    result.style.textAlign='right';
     
}







function getNumber(num)
{
    
    var result=document.getElementById("result");

    result.style.backgroundColor='yellow';
    
    result.style.textAlign='right';
     
    result.value += num; 
}





function clearResult()
{

    var result=document.getElementById("result");

    result.style.backgroundColor='';
     
    result.value="";   
    
}


function getResult()
{

    var result=document.getElementById("result");

    result.style.backgroundColor='red';

    result.value=eval(result.value);
}