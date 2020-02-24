var errorName = {
  id: "name",
  message: "Name field must be filled"
};
var errorEmail = {
  id: "email",
  message: "Email field must be filled and Should be a valid email address"
};
var errorComment = {
  id: "comment",
  message: "Comments field must be filled and the character max limit is 50"
};
var errorPassword = {
  id: "password",
  message:
    "Password field must be filled. You should have a 6 characters minimum length and contains at leas 1 lowercase, 1 uppercase and 1"
};
var errors = [];

//Funcion que se encarga de mandar como hijos el contenido de error a los nuevos elementos "li".
function renderErrors() {
  errors.forEach(error => {
    document
      .getElementById("errorList")
      .appendChild(elementList(error.message)); //llama a la funcion elementList para crearse en un elemento de lista
  });
}
//Crea los elementos de la lista ya con el mensaje como hijo
function elementList(message) {
  let newli = document.createElement("li");
  newli.appendChild(document.createTextNode(message));
  return newli;
}

//Función que borra los errores de la lista
function clearList() {
  var list = document.getElementById("errorList"); //guarda en la variable list todos los li de errores
  var child = list.lastElementChild; //Guarda el último error
  while (child) {
    list.removeChild(child);
    child = list.lastElementChild;
  }
}

function cleanAndRender() {   //Clean the list to add children
  clearList();
  renderErrors();
}

//Busca en el arreglo de errores, si no está, lo incluye. & deshabilita el botón
function addError(error) {
  if (!errors.map(x => x.id).includes(error.id)) {
    errors.push(error);
    cleanAndRender();
    submit();
  }
}

//Busca errores para ver si ya esta en el array, si ya están se va a ejecutar cleanAndRender 
//para borrar la lista y poner nuevamente el error y no este duplicado. & desabilita el boton
function deleteError(id) {
  errors = errors.filter(x => x.id !== id);
  cleanAndRender();
  submit();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validationName(element) {
  var field = element.value;
  if (field === "") {
    addError(errorName);
  } else {
    deleteError(errorName.id);
  }
}

function validationEmail(element2) {
  var field = element2.value;
  if (
    field == "" ||
    !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field))
  ) {
    addError(errorEmail);
  } else {
    deleteError(errorEmail.id);
  }
}
function validationComments(element3) {
  var field = element3.value;
  if (
    field == "" ||
    field == null ||
    field.length > 50 ||
    /^\s+$/.test(field)
  ) {
    addError(errorComment);
  } else {
    deleteError(errorComment.id);
  }
}
function validatePassword(element4) {
  var field = element4.value;
  if (!(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(field))) {
    addError(errorPassword);
  } else {
    deleteError(errorPassword.id);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function validationVehicles() {
  var car = document.getElementById("car");
  var bike = document.getElementById("bike");
  var motorcycle = document.getElementById("motorcycle");
  let access = document.getElementsByClassName("vehicle");
  if (
    car.checked !== true &&
    bike.checked !== true &&
    motorcycle.checked !== true
  ) { 
    access[0].classList.add("visibleErrorVehicle");

  }else{
    access[0].classList.remove("visibleErrorVehicle");
    access[0].classList.add("hiddenErrorVehicle");  
  }
}

//Validar colores del carro
function validateRadious(){
  let access = document.getElementsByClassName("errorColor");
  access[0].classList.remove("visibleErrorCar");
  access[0].classList.add("hiddenErrorCar");  
}

//Validacion string requerida
function validateString(element, errorId) {
  var error = document.getElementById(errorId);
  if (element.value == "") {
    error.removeAttribute("hidden");
  } else {
    error.setAttribute("hidden", "true");
  }
}

//BIKE: Validar accesorios
function validateAccesory(){
  var selectedPedals = document.getElementById("pedals");
  var selectedTire = document.getElementById("tire");
  var selectedLights = document.getElementById("lights");
  let access = document.getElementsByClassName("errorAccesory");

  if (selectedPedals.checked == true || selectedTire.checked == true || selectedLights.checked == true) {  
  access[0].classList.remove("visibleErrorBike");
  access[0].classList.add("hiddenErrorBike");
  }
  else{
    access[0].classList.remove("hiddenErrorBike");
    access[0].classList.add("visibleErrorBike");
  }
}

//MOTORCYCLE: Validar tipo de moto
function validateRadiousMoto(){
  let access = document.getElementsByClassName("errorType");
  access[0].classList.remove("visibleErrorMoto");
  access[0].classList.add("hiddenErrorMoto");  
}

function displayCar() {
  let access = document.getElementsByClassName("car-form");
  if (car.checked) {
    let remove = access[0].classList.remove("hiddenCar");
    return remove;
  } else {
    access[0].classList.add("hiddenCar");
  }
}
function displayBike() {
  let access = document.getElementsByClassName("bike-form");
  if (bike.checked) {
    let remove = access[0].classList.remove("hiddenBike");
    return remove;
  } else {
    access[0].classList.add("hiddenBike");
  }
}
function displayMotorcycle() {
  let access = document.getElementsByClassName("motorcycle-form");
  if (motorcycle.checked) {
    let remove = access[0].classList.remove("hiddenMotorcycle");
    return remove;
  } else {
    access[0].classList.add("hiddenMotorcycle");
  }
}

//Funcion que evalua el envío de formulario
function submit(){   
  var listita = document.getElementById("errorList");   
  var elements = listita.getElementsByTagName("li");   
  if(elements.length === 0){     
    document.getElementById("subForm").disabled=false; 
  }   
  else if(elements.length != 0){    
    document.getElementById("subForm").disabled=true;  
  }
}
 
