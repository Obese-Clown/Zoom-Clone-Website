const nameField = document.getElementById('nameField')
const emailField = document.getElementById('emailField')
const messageField = document.getElementById('messageField')
const submitButton = document.getElementById('submitButton')

function sendEmail(email, subject, body)
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "joeyqsa211@gmail.com",
    Password : "vlojwjmfaudgadhh",
    To : email,
    From : "joeyqsa211@gmail.com",
    Subject : subject,
    Body : body
  }).then(
    message => alert("Message To " + email + " Sent Successfully")
  );
}

function isValid(name, email, message)
{
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (name === "")
  {
    return false;
  }

  if (!email.match(mailformat))
  {
    return false;
  }

  if (message === "")
  {
    return false;
  }
  return true;
}

submitButton.addEventListener('click', () => {
  let name = nameField.value;
  let email = emailField.value;
  let message = messageField.value;

  if (isValid())
  {
    sendEmail(email, "Email To " + name, message);
  }

  else
  {
    console.log("Invalid Information");
  }
})