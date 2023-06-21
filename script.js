const countValue=document.getElementById('counter');

const increment=()=>{
    //we get a string by innerText, hence we use parseInt
    //getting value from ui
 let value=parseInt(countValue.innerText);
 value=value+1;
 //updating the existing value of ui-setting
countValue.innerText=value;
};
const decrement=()=>{
    //we get a string by innerText, hence we use parseInt
    //getting value from ui
    let value=parseInt(countValue.innerText);
    value=value-1;
    //updating the existing value of ui-setting
   countValue.innerText=value;
};