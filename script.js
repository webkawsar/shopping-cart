// plus button event listener

const plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", function(){
    const plusInput = document.getElementById("plusInput").value;
    getParseValue = parseFloat(plusInput);
    gestAbsolute = Math.abs(getParseValue);
    
    getValue = document.getElementById("plusInput").value = gestAbsolute + 1;
    
    console.log(getValue);
})
























