function sto() {

    localStorage.setItem("username",username.value);
    localStorage.setItem("password",password.value);
    alert("signed up successfully");
    window.location.href="login.html"
}
function Login() {
    var username2= localStorage.getItem("username");
    var password2=localStorage.getItem("password");

    var usern=document.getElementById('uname');
    var Pg=document.getElementById('pw');

    if( usern.value !== username2 || Pg.value !== password2 ){

        alert("Check your details and try again");

    }else{

        alert("you Have logged in Successfully");
        window.location.href="home.html";
        alert("welcome" + username2);

    }

}