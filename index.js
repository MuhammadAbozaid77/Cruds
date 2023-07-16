
/* ---------------------------- Dom Elements ------------------------------ */
let ShirtTeam = document.getElementById("ShirtTeam");
let ShirtSize = document.getElementById("ShirtSize");
let ShirtCompany = document.getElementById("ShirtCompany");
let ShirtSalary = document.getElementById("ShirtSalary");

// Cartoona  Row
let ShirtRow = document.getElementById("ShirtRow");

// Update and Creat Buttons + Mood
// Add and Update Button....
let addTshirt = document.getElementById("add_Tshirt");

// Mode of App (Add or Update)
let appMood = "add" ;
let UpdateCode ;

/* ---------------------------- Local Storage ------------------------------ */
let ShirtStore = [];
if(localStorage.getItem("tShirt") === null){
    ShirtStore ;
}
else {
    ShirtStore = JSON.parse(localStorage.getItem("tShirt"));
    displayShirt();
}


/* ---------------------------- Add T-Shirt ------------------------------ */

function addShirt() {
    let ShirtObject  = {
        company : ShirtCompany.value ,
        name : ShirtTeam.value ,
        size : ShirtSize.value ,
        salary : ShirtSalary.value ,
    }

    // Cgeck Add or Update
    if(appMood === "add"){
        ShirtStore.push(ShirtObject);
    }
    else {
        ShirtStore[UpdateCode] = ShirtObject ;
        addTshirt.innerHTML = "Add T-Shirt";
        appMood = "add";
    }

    // Add Data to Local Storage 
    localStorage.setItem("tShirt" , JSON.stringify(ShirtStore));

    displayShirt();
  }

/* ---------------------------- Display T-Shirt Data ------------------------------ */

function displayShirt(){
    let cartoona = `` ;
    for(let i =0 ; i < ShirtStore.length ; i++){
        cartoona += `
        <tr>
            <td> ${ShirtStore[i].company} </td>
            <td> ${ShirtStore[i].name} </td>
            <td> ${ShirtStore[i].size} </td>
            <td> ${ShirtStore[i].salary} </td>
            <td onclick="deleteShirt(${i})" class="pointer"> <i class="fa-solid fa-trash mx-1 text-danger"></i>  Deleted </td>
            <td onclick="updateShirt(${i})" class="pointer"> <i class="fa-solid fa-pen-to-square mx-1 text-primary"></i> Updated </td>
        </tr>
        `
    }
    ShirtRow.innerHTML = cartoona ;
}

/* ---------------------------- Delete T-Shirt  ------------------------------ */

function deleteShirt(code) {
    ShirtStore.splice( code , 1);
    localStorage.setItem("tShirt" , JSON.stringify(ShirtStore));
    displayShirt();
  }
/* ---------------------------- Clear Data T-Shirt  ------------------------------ */

function clearShirt() {
    ShirtCompany.value  = "" ;
    ShirtTeam.value = "";
    ShirtSize.value = "" ;
    ShirtSalary.value = "" ;
  }

/* ---------------------------- Search T-Shirt  ------------------------------ */
function searchShirt(code) { 
    let cartoona = `` ;
    for(let i = 0 ; i < ShirtStore.length ; i++) {
        if(ShirtStore[i].name.toLowerCase().includes(code.toLowerCase()) == true){
            cartoona += `
                <tr>
                    <td> ${ShirtStore[i].company} </td>
                    <td> ${ShirtStore[i].name} </td>
                    <td> ${ShirtStore[i].size} </td>
                    <td> ${ShirtStore[i].salary} </td>
                    <td onclick="deleteShirt(${i})" class="pointer"> <i class="fa-solid fa-trash mx-1 text-danger"></i>  Deleted </td>
                    <td onclick="updateShirt(${i})" class="pointer"> <i class="fa-solid fa-pen-to-square mx-1 text-primary"></i> Updated </td>
                </tr>
            `
        }
    }
    ShirtRow.innerHTML = cartoona ;
 }
 
 /* ---------------------------- Update T-Shirt  ------------------------------ */

function updateShirt(code) {

    addTshirt.innerHTML = "Update Shirt";
    appMood = "update";
    UpdateCode = code ;
    addTshirt.style.backgroundColor = "rgb(255, 187, 0)"

    ShirtCompany.value  = ShirtStore[code].company ;
    ShirtTeam.value = ShirtStore[code].name ;
    ShirtSize.value = ShirtStore[code].size ;
    ShirtSalary.value = ShirtStore[code].salary ;
  }
