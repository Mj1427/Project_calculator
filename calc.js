function clrDisplay(){
    document.getElementById('display').value=" ";
}
function deleteChar(){
   const display= document.getElementById('display');
   display.value=display.value.slice(0,-1)
}
function appendToDisplay(value){
    const display=document.getElementById('display');
    display.value+=value
}
function calculateResult(){
    const display=document.getElementById('display');
    try{
        display.value=eval(display.value)
    }
    catch(e){
        display.value="error"
    }
}
