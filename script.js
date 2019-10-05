/*
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
 */
var loginBtn = document.querySelector('#login_btn');
var regBtn = document.querySelector('#reg_btn');
var inputEmail = document.querySelector('#input_email');
var inputPassword = document.querySelector('#input_password');
var request = new XMLHttpRequest();
regBtn.onclick = function () {
    var email = inputEmail.value;
    var password = inputPassword.value;
    registration(email,password);
};

function registration(email, password) {
    var body = {
        email:email,
        password:password
    };

    request.open('POST','https://contacts-telran.herokuapp.com/api/registration');
    request.setRequestHeader('Content-Type','application/json; charset=utf-8');
    request.onreadystatechange = function () {
        if(this.readyState === 4){
            if(this.status == 200){

               var responseBody = JSON.parse(this.responseText);
               localStorage.setItem('token',responseBody.token);
            }else if(this.status == 400){
                console.log(this.responseText);
            }else if(this.status == 409){
                console.log(this.responseText);
            }else{
                console.log(this.responseText);
            }
        }
    };
    request.send(JSON.stringify(body));
}

function sendAjax() {
    var request = new XMLHttpRequest();
    request.open('GET','https://contacts-telran.herokuapp.com/api/contact');
    request.onreadystatechange = function (){
        if(this.readyState === 4 && this.status == 200){
            console.log(this.responseText);
        }else{
            console.log(this.responseText);
        }
    };

        request.send();

}

