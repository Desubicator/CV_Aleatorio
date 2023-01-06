const url =' https://randomuser.me/api/ ';

let avatar = document.getElementById('avatar');
let fullname = document.getElementsByClassName("fullname");
let username = document.getElementsByClassName("username");
let email = document.getElementById('email');
let btn = document.getElementById('btn');
let nationality = document.getElementById("nationality");
let age = document.getElementById("age");
let address = document.getElementById("address");
let phone = document.getElementById("phone");

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .then(reset)
    .then(randomSkills)
    .then(populateNodes)
    .then(populateCourses)
    .catch(printError)
});

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON (res){
  return res.json();
}

// Funcion para generar nuevo perfil usando la API de random user y actualizando el html.

function updateProfile (profile){
  avatar.src = profile.results[0].picture.large;
   
  for(let i = 0; i < fullname.length; i++){
    fullname[i].innerHTML = profile.results[0].name.first + " "+ profile.results[0].name.last;
  }

  for(let i = 0; i < username.length; i++){
    username[i].innerHTML = profile.results[0].login.username;
  }

  email.innerHTML = profile.results[0].email;
  nationality.innerHTML = profile.results[0].nat;
  age.innerHTML = profile.results[0].dob.age;
  address.innerHTML = profile.results[0].location.street.number + " " + profile.results[0].location.street.name + ", " + profile.results[0].location.city + ", " + profile.results[0].location.state + ", " + profile.results[0].location.country;
  phone.innerHTML = profile.results[0].phone;
  return 1;
}

function printError (error){
  console.log(error);
}


// Borra las habilidades guardadas previamente.

function reset() {
  let full = document.querySelectorAll(".full")
  for (let i = 0; i < full.length; i++) {
    full[i].classList.remove("full"); 
  }
}

// Habilidades Aleatorias, genera puntuaciones para las diversas habilidades, entre 1 a 5 y cambia las clases de los spans para marcarlo.

function randomSkills() {

  let skill = document.getElementsByClassName("skill");

  for (let i = 0; i < skill.length; i++) {
    let skillLevel = Math.floor(Math.random() * 5 + 1) ;
    let item = skill[i];
    let temp = Array.from(item.querySelectorAll(":scope > span")).reverse();

    for (let j = 0; j < skillLevel; j++) {
      temp[j].classList.add("full");
    }}}


  
  // Genera nodos de expeeriencia aleatorios.

  function randNum() {
      return Math.floor(Math.random() * 9 + 2) ;
  }

  function randCompany() {
    let list = [ "Apple","Microsoft","Amazon","Alphabet (Google)","Facebook","Intel","IBM","Oracle","Samsung","HP","Dell","Cisco", "AMD",
    "Nvidia","Xerox","Hewlett Packard Enterprise","Lenovo","Acer","Asus","Huawei","LG","ZTE","Toshiba","VMWare","SAP","Siemens",
    "HTC","Nokia","Ericsson","Palo Alto Networks","Symantec","Trend Micro","Check Point","Fortinet","Akamai","Cisco Systems"]

    let randIndex = Math.floor(Math.random() * 36);

    result = list[randIndex]
    return result
  }

  function randJob() {
    let jobList = [ "Software Developer","Web Developer","Mobile Developer","DevOps Engineer","Data Scientist","Data Engineer","Machine Learning Engineer","Software Tester","Technical Writer",
    "Technical Project Manager","Technical Support Engineer","Information Security Engineer","Cloud Solutions Architect","DevOps Architect","Data Architect",
    "Software Architect","Technical Sales Engineer","Product Manager","UX Designer","Graphic Designer","UI Designer","Tech Writer","Technical Editor",
    "Technical Lead","Technical Recruiter","Tech Support Representative","Tech Support Manager","Technical Trainer","Technical Consultant",
    "Technical Marketing Manager","Technical Account Manager","Technical Support Technician","Technical Support Specialist","Technical Support Analyst"]

    let randIndex = Math.floor(Math.random() * 34);

    result = jobList[randIndex]
    return result
  }

  function populateNodes(){
    let trabajo = document.getElementsByClassName("trabajo");
    let nodos =  document.getElementsByClassName("nodo");
    for(let i = 0; i < trabajo.length; i++){
      let job = randJob();
      nodos[i].innerHTML = "Tengo " + randNum() + " años de experiencia en " + randCompany() + ". Donde me desempeñaba como " + job + ".";
      trabajo[i].innerHTML = job;
    }
  }

  // Genera nodos de formacion academica aleatorios.

  function randCourse(){
    let courses = ["Introducción a la Informática","Introducción a JavaScript","JavaScript para principiantes","Fundamentos de JavaScript",
    "Técnicas avanzadas de JavaScript","Programación orientada a objetos con JavaScript","Estructuras de datos y algoritmos con JavaScript",
    "Desarrollo Web con JavaScript y Node.js","Desarrollo Web Full Stack con JavaScript","Desarrollo de aplicaciones móviles con JavaScript y React Native",
    "Introducción a Python","Python Avanzado","Desarrollo web con HTML, CSS y JavaScript","Frameworks de JavaScript: Angular, React y Vue",
    "Bibliotecas JavaScript: jQuery y Lodash","Estructuras de datos y algoritmos en JavaScript", "Introducción a la ciencia de datos",
    "Aprendizaje automático con Python", "Visualización de datos con D3.js","Desarrollo web de pila completa con MERN","Desarrollo de aplicaciones móviles con React Native"]

    let randIndex = Math.floor(Math.random() * 21);

    result = courses[randIndex]
    return result
  }

  function populateCourses(){
    let formacion = document.getElementsByClassName("formacion");
    let nodoEst =  document.getElementsByClassName("nodoEst");
    for(let i = 0; i < formacion.length; i++){
      let curso = randCourse();
      let duracion = Math.floor(Math.random() * 23 + 2);
      nodoEst[i].innerHTML = "Me forme con el programa académico de " + curso + " de una duración de " + duracion + " meses.";
      formacion[i].innerHTML = curso;
    }
  }
