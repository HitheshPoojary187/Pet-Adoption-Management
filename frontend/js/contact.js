function sendEmail(){
  var username=document.getElementById("name").value;
  var mail=document.getElementById("email").value;
  var phn=document.getElementById("phone").value;
  var message=document.getElementById("message").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pawsquadadopt@gmail.com",
        Password : "1F46A28484E1E71246AB23225C163A06C1C6",
        To : "pawsquadadopt@gmail.com",
        From : mail,
        Subject : "Reqeust for contact..!(PAW SQUAD)",
        Body : "Name: " + username + "<br>Email: " + mail + "<br>Phone: " + phn + "<br><br>Message: <b>"+ message + "</b>"
    }).then(
      message => alert(message)
    );
    }