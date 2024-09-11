let historyhtml='';
Calculate('0');
function Calculate(data){
    let ans=document.querySelector('.display');
    let text=ans.value;
    if(data === 'clear'){
        ans.value='0';   
    }
    else if(data==='Delete' || data==='Backspace'){
        text=text.slice(0,-1);
        if(text.length===0) ans.value='0';
        else ans.value=text;
    }
    else if(data==='=' || data==='Enter'){
        let result=eval(text);
        display_history(text , result);
        ans.value=result;
    }
    else if((data==='%' || data==='/' || data==='-' || data==='+' || data==='*') && (text[text.length-1]==='+' || text[text.length-1]==='-' || text[text.length-1]==='/' || text[text.length-1]==='%')){
        ans.value=text;
    }
    else if((text.length==1 || text.length==0)  && (text=='0' || text=='')){
        if(data!=='%' && data!=='*' && data!=='/') ans.value=data;
    }
    else ans.value+=data;

    ans.scrollLeft=ans.scrollWidth;
}


function keyclicked(value){
    if((value>='0' && value<'9')){
        Calculate(value);
    }
    else if(value=='%' || value=='*' || value=='-' || value=='+' || value=='/' || value=='(' || value==')' || value=='.'){
        Calculate(value);
    }
    else if(value=='Backspace' || value=='Delete' || value=='Enter'){
        Calculate(value);
    }
}

function display_history(calculation , result){
    let history=document.querySelector('.display-history');
    if(calculation==='ClearHistory'){
        historyhtml='';
        history.innerHTML=``;
    }
    else{
        historyhtml=`<div>${calculation}=${result}</div>`+historyhtml;
        history.innerHTML=historyhtml;
    }
}

function clear_history(){
    display_history('ClearHistory' , '');
}