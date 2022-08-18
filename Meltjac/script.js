// feedback script
function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_zfqvgv5","template_086odle", params).then(function (res){
        alert("Success!" + res.status);
    })
}
// Services 