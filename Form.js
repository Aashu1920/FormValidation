console.log("HeyAashu");
const userName = document.getElementById("userName");

const number = document.getElementById("Num");

const email = document.getElementById("Email");

const address = document.getElementById("Address");

let validname = false
let validemail = false
let validphone = false

// const Message = document.getElementById('Message');

// console.log(Name,Number,Email,Address,Message);

// name
userName.addEventListener("blur", () => {
  let reg = /^[a-zA-Z]([a-zA-Z0-9]){2,10}$/;

  let str = userName.value;

  console.log(reg, str);

  if (reg.test(str)) {
    console.log("Name is valid");

    userName.classList.remove("is-invalid");

    userName.classList.remove("text-danger");
    validname=true;
  } else {
    console.log("Name is not valid");

    userName.classList.add("is-invalid");

    userName.classList.add("text-danger");
    validname=false;
  }

  console.log("Name is blurred");
});

//Email
email.addEventListener("blur", () => {
  let reg = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

  let str = email.value;

  console.log(reg, str);

  if (reg.test(str)) {
    console.log("Email is valid");

    email.classList.remove("is-invalid");

    email.classList.remove("text-danger");
    validemail=true;
  } else {
    console.log("Email is not valid");

    email.classList.add("is-invalid");

    email.classList.add("text-danger");
    validemail=false;
  }
  console.log("Email is blurred");
});

//Number
number.addEventListener("blur", () => {
  let reg = /^[0-9]{10}$/;

  let str = number.value;

  console.log(reg, str);

  if (reg.test(str)) {
    console.log("number is valid");

    number.classList.remove("is-invalid");

    number.classList.remove("text-danger");
    validphone=true;
  } 
  else {
    console.log("number is not valid");

    number.classList.add("is-invalid");

    number.classList.add("text-danger");
    validphone=false;
  }
  console.log("Number is blurred");
});

// Address
address.addEventListener("blur", () => {
  console.log("Address is blurred");
});


// button

const btn = document.getElementById('btnn');

btn.addEventListener('click',(e)=>{
e.preventDefault();
console.log('you have clicked');
if(validname && validemail && validphone)
{
  let success = document.getElementById('success');
  
  success.classList.add('show');
  failure.classList.remove('show');

}
else
{
  let failure = document.getElementById('failure');
  failure.classList.add('show');
  success.classList.remove('show');
}

});