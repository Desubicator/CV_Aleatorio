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