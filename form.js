function results() {
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var email = document.getElementById('email').value
  var reason = document.getElementById('reason').value
  var comment = document.getElementById('comment').value

  document.write("<h1>Thank you!</h1>")
  document.write("<h2>Review information below: </h2>")
  document.write("Name: " + fname + " " + lname + "<br>")
  document.write("Email: " + email + "<br>")
  document.write("Reason for contact: " + reason + "<br>")
  document.write("Comment: " + comment + "<br>")
}

