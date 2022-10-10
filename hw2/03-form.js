/** Exercise 03 - Form **/

// Add your code here

let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Empty form check
  if (!(form.elements.name.value.length && form.elements.email.value.length)) {
    let error = document.getElementById("error")
    error.style.color = "red";
    if (!(form.elements.name.value.length || form.elements.email.value.length)) {
      error.innerText = "Error: name and email are required fields.";
    }
    else if (!(form.elements.name.value.length)) {
      error.innerText = "Error: name is a required field."; 
    }
    else {
      error.innerText = "Error: email is a required field.";
    }
    return
  }
  else {
    error.innerText = "";
  }

  console.group("========= FORM SUBMISSION =========");
  // Username
  if (form.elements.name.value.length) {
    console.log("Name:", form.elements.name.value);
  } else {
    console.log("Name: no submission");
  }

  // Email
  if (form.elements.email.value.length) {
    console.log("Email:", form.elements.email.value);
  } else {
    console.log("Email: no submission");
  }

  // Message
  if (form.elements.message.value.length) {
    console.log("Message:", form.elements.message.value);
  } else {
    console.log("Message: no submission");
  }

  // Newsletter
  if (form.elements.checkbox.checked) {
    console.log("Newsletter: Yes, I would like to join the newsletter.");
  } else {
    console.log("Newsletter: No, thank you.");
  }
  console.groupEnd();
}
