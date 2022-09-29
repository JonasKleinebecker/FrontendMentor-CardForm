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
    if((fcardholder.validity.valid === true)
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

        if(fcardnumber.validity.valid === false){
            fcardnumber.classList.add("error");

            if(fcardnumber.validity.patternMismatch === true){
                fcardnumber.classList.add("wrongnumberpattern")
            }
            if(fcardnumber.validity.tooShort ===true || fcardnumber.validity.tooLong ===true){
                fcardnumber.classList.add("wronglength");
            }
        }
        if(fcardholder.validity.valid === false){
            fcardholder.classList.add("error");
        }
        if(fcardexpmonth.validity.valid === false){
            fcardexpmonth.classList.add("error");

            if(fcardexpmonth.validity.patternMismatch === true){
                fcardexpmonth.classList.add("wrongdatepattern")
            }
             
        }
        if(fcardexpyear.validity.valid === false){
            fcardexpyear.classList.add("error");

            if(fcardexpyear.validity.patternMismatch === true){
                fcardexpyear.classList.add("wrongdatepattern")
            }
             
        }
        if(fcardcvc.validity.valid === false){
            fcardcvc.classList.add("error");
        }
    }
    if(fcardnumber.validity.patternMismatch === false && fcardnumber.classList.contains("wrongpattern")){
        fcardnumber.classList.remove("wrongpattern");
       }
    if(fcardnumber.validity.tooLong === false && fcardnumber.validity.tooShort === false && fcardnumber.classList.contains("wronglength")){
        fcardnumber.classList.remove("wronglength");
       }
    if(fcardexpmonth.validity.patternMismatch === false && fcardexpmonth.classList.contains("wrongdatepattern")){
        fcardexpmonth.classList.remove("wrongdatepattern");
       }
    if(fcardexpyear.validity.patternMismatch === false && fcardexpyear.classList.contains("wrongdatepattern")){
        fcardexpyear.classList.remove("wrongdatepattern");
       }
}