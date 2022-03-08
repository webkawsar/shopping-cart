
function getParseValue(value) {

    // get parse value 
    const absoluteValue = Math.abs(value);
    const parseValue = parseFloat(absoluteValue);
    return parseValue;

}

function updateQuantity(getQty) {

    // get input value 
    getValue = document.getElementById(getQty).value;
    getTotalQty = getParseValue(getValue);
    return getTotalQty;
}


function updatePrice(hideAmount, setTotalQty) {

    //update price amount
    productAmount = document.getElementById(hideAmount).innerText;
    getParseAmount = getParseValue(productAmount);
    totalAmount = setTotalQty * getParseAmount;
    return totalAmount;
}


function updateSub(productAmount2, totalAmount) {

    //sub total button
    getProductAmount2 = document.getElementById(productAmount2).innerText;
    getParseAmount = getParseValue(getProductAmount2);
    setSubTotal = getParseAmount + totalAmount;
    return setSubTotal;
}


//update tax button
function updateTax(tax) {

    getTax = document.getElementById(tax).innerText;
    getParseTax = getParseValue(getTax);
    setTax = getParseTax + 5;
    document.getElementById(tax).innerText = setTax;

}

// update total tax button
function updateTotal(subTotal, tax, total) {

    getSubTotal = document.getElementById(subTotal).innerText;
    getParseSubTotal = getParseValue(getSubTotal);

    getTax = document.getElementById(tax).innerText;
    getParseTax = getParseValue(getTax);

    totalAmount = getParseSubTotal + getParseTax;
    document.getElementById(total).innerText = totalAmount;
}


// plus button event listener

const plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", function () {

    // get input value and update quantity
    getTotalQty = updateQuantity("getQty");
    setTotalQty = document.getElementById("getQty").value = getTotalQty + 1;

    //update price amount
    totalAmount = updatePrice("hideAmount", setTotalQty);
    document.getElementById("productAmount").innerText = totalAmount;

    //sub total button
    setSubTotal = updateSub("productAmount2", totalAmount);
    document.getElementById("subTotal").innerText = setSubTotal;

    // //tax button
    updateTax("tax");

    //total button
    updateTotal("subTotal", "tax", "total");

})


// Minus button event Listener

const minusButton = document.getElementById("minusButton");
minusButton.addEventListener("click", function () {

    // get input value and update quantity
    getQty = updateQuantity("getQty");
    getTotalQty = getQty - 1;
    getValue = getParseValue(getTotalQty);
    setTotalQty = document.getElementById("getQty").value = getValue;

    //update price amount
    totalAmount = updatePrice("hideAmount", setTotalQty);
    document.getElementById("productAmount").innerText = totalAmount;

    setSubTotal = updateSub("productAmount2", totalAmount);
    document.getElementById("subTotal").innerText = setSubTotal;


    // //tax button
    getTax = document.getElementById("tax").innerText;
    getParseTax = getParseValue(getTax);
    get = getParseTax - 5;
    set = getParseValue(get);
    document.getElementById("tax").innerText = set;

    //total button
    updateTotal("subTotal", "tax", "total");

})




/******************************* */
//second cart item plus button

const plusButton2 = document.getElementById("plusButton2");
plusButton2.addEventListener("click", function () {

    // get input value and update quantity
    getTotalQty = updateQuantity("getQty2");
    setTotalQty = document.getElementById("getQty2").value = getTotalQty + 1;

    //update price amount
    totalAmount = updatePrice("hideAmount2", setTotalQty);
    document.getElementById("productAmount2").innerText = totalAmount;

    setSubTotal = updateSub("productAmount", totalAmount);
    document.getElementById("subTotal").innerText = setSubTotal;

    // //tax button
    updateTax("tax");


    //total button
    updateTotal("subTotal", "tax", "total");

})


//Second cart item Minus button event Listener

const minusButton2 = document.getElementById("minusButton2");
minusButton2.addEventListener("click", function () {

    // get input value and update quantity
    getQty = updateQuantity("getQty2");
    getTotalQty = getQty - 1;
    getValue = getParseValue(getTotalQty);
    setTotalQty = document.getElementById("getQty2").value = getValue;


    //update price amount
    totalAmount = updatePrice("hideAmount2", setTotalQty);
    document.getElementById("productAmount2").innerText = totalAmount;

    setSubTotal = updateSub("productAmount", totalAmount);
    document.getElementById("subTotal").innerText = setSubTotal;


    // //tax button
    getTax = document.getElementById("tax").innerText;
    getParseTax = getParseValue(getTax);
    get = getParseTax - 5;
    set = getParseValue(get);
    document.getElementById("tax").innerText = set;

    //total button
    updateTotal("subTotal", "tax", "total");


})


//sub total and tax button

getProduct1 = document.getElementById("productAmount").innerText;
getParseAmount1 = getParseValue(getProduct1);

getProduct2 = document.getElementById("productAmount2").innerText;
getParseAmount2 = getParseValue(getProduct2);

setSubTotal = calculateSubTotal(getParseAmount1, getParseAmount2);
document.getElementById("subTotal").innerText = setSubTotal;

function calculateSubTotal(value1, value2) {
    subTotal = value1 + value2;
    return subTotal;
}


// total button 

getSubTotal = document.getElementById("subTotal").innerText;
getParseSubTotal = getParseValue(getSubTotal);

getTax = document.getElementById("tax").innerText;
getParseTax = getParseValue(getTax);

finalTotal = getParseSubTotal + getParseTax;
document.getElementById("total").innerText = finalTotal;


// checkout button
document.getElementById("checkout").addEventListener("click", function () {
    alert("Are you sure checkout thid product");
});



// remove cart item

// var items = document.getElementsByClassName("cart");

// for (let i = 0; i < items.length; i++) {
//     const element = items[i];

//     element.addEventListener("click", function(event){
//         event.target.parentNode.removeChild(event.target);
//     });
    
// }


// Here extra work unnecessary
















