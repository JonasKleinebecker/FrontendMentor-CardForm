    const fcardholder = document.getElementById("fcardholdername");
    const fcardnumber = document.getElementById("fcardnumber");
    const fcardexpmonth = document.getElementById("fexpmonth");
    const fcardexpyear = document.getElementById("fexpyear");
    const fcardcvc = document.getElementById("fcvc");

    const dcardholder = document.getElementById("dcardholdername");
    const dcardnumber = document.getElementById("dcardnumber");
    const dcardcvc = document.getElementById("dcvc");
    const dcardexpdate = document.getElementById("dexpdate");

    const subbutton = document.getElementById("btnsubmit");
    subbutton.addEventListener("click", writeDataOnCard);

function writeDataOnCard(){
    if((fcardholder.validity.valid === true) && !(fcardholder.value === " ")
        && (fcardnumber.validity.valid === true) 
        && (fcardexpmonth.validity.valid === true) 
        && (fcardexpyear.validity.valid === true) 
        && (fcardcvc.validity.valid === true) 
        ){
        dcardholder.innerHTML = fcardholder.value;
        dcardnumber.innerHTML = fcardnumber.value;
        dcardcvc.innerHTML = fcardcvc.value;
        dcardexpdate.innerHTML = fcardexpmonth.value + "/" + fcardexpyear.value;
    }
    else{
        //set .error class
    }
}