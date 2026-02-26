const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const add=document.getElementById('add');
const minus=document.getElementById('minus');
const kob=document.getElementById('kob');
const bol=document.getElementById('bol');
const result=document.getElementById("result");


function calc(opera){
    const n1=Number(num1.value);
    const n2=Number(num2.value);
    let answer;
    if(opera==="add"){
        answer=n1+n2;
        result.textContent="Res"+answer;
    }
    if(opera==="minus"){
        answer=n1-n2;
        result.textContent="Res"+answer;
    }
    if(opera==="kob"){
        answer=n1*n2;
        result.textContent="Res"+answer;
    }
    if(opera==="bol"){
        if(n2==0){
            result.textContent="Error";
        }
        else{
            answer=n1/n2;
            result.textContent="Res"+answer;
        }

    }
}

add.addEventListener('click',function(){

    calc("add");
})
minus.addEventListener('click',function(){

    calc("minus");
})
kob.addEventListener('click',function(){

    calc("kob");
})
bol.addEventListener('click',function(){

    calc("bol");
})