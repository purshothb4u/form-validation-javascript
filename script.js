document.getElementById("registerForm").addEventListener("submit", (event)=> {
event.preventDefault();
});

function register(){
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let cpassword = document.getElementById("cpassword").value.trim();

  validateInputs();

   if (validateInputs()) {
     let tr = document.createElement("tr");

     let tdUsername = document.createElement("td");
     tdUsername.textContent = username;
     let tdEmail = document.createElement("td");
     tdEmail.textContent = email;
     let tdPassword = document.createElement("td");
     tdPassword.textContent = password;


     let tdDelete = document.createElement("td");
     let deleteButton = document.createElement("button");
     deleteButton.className = "btn btn-danger";
     deleteButton.textContent = "Delete";

     // Add click event listener to delete button
     deleteButton.addEventListener("click", () => {
       tr.remove();
     });

     tdDelete.appendChild(deleteButton);

     tr.appendChild(tdUsername);
     tr.appendChild(tdEmail);
     tr.appendChild(tdPassword);
     tr.appendChild(tdDelete);

     document.getElementById("tableBody").appendChild(tr);

     // Clear form inputs
     document.getElementById("registerForm").reset();
   };

}

function validateInputs(){
    const usernameVal = document.getElementById("username").value.trim();
    const emailVal = document.getElementById("email").value.trim();
    const passwordVal = document.getElementById("password").value.trim();
    const cpasswordVal = document.getElementById("cpassword").value.trim();

    let isValid = true;

    if(usernameVal === ''){
        setError(username, "Username is required")
        isValid = false;
    }
    else if(usernameVal.length < 3 ){
        setError(username, "Username must be atleast 3 characters");
        isValid = false;
    }
    else if (!validName(usernameVal)){
        setError(username, "Name must contains only letters");
        isValid = false;
    }
    else{
        setSuccess(username)   
    }

    if(emailVal === ''){
        setError(email,"Email is required")
        isValid = false;
    }
    else if(!ValidEmail(emailVal)){
        setError(email,"Pls enter valid email")
        isValid = false;
    }
    else {
        setSuccess(email)  
    }

    if (passwordVal === "") {
      setError(password, "Password is required");
      isValid = false;
    } 
    else if (passwordVal.length < 8) {
        setError(password, "Password must be atleast 8 characters");
        isValid = false;
    } 
    else if(!validPassword(passwordVal)){
        setError(
          password,"one uppercase, one lowercase, one digit, one symbol");
        isValid = false;
    }
    else {
      setSuccess(password); 
    }

    if(cpasswordVal ===''){
        setError(cpassword,"Conform password is required")
         isValid = false;
    }
    else if (cpasswordVal !== passwordVal){
        setError(cpassword,"Password does not match")
         isValid = false;
    }
    else {
        setSuccess(cpassword)    
    }

    return isValid;    
}

function setError(element,message){
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = '';
}

//Name validation
function validName(name){
const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression to allow only letters and spaces
return nameRegex.test(name);
}

// Email validation 
 function ValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
   return emailRegex.test(email);
 }

 // Password validation
function validPassword(password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/; //At least one uppercase letter, one lowercase letter, one digit, one symbol, and be at least 8 characters long
  return passwordRegex.test(password);
}
