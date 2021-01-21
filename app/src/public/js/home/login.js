const id = document.querySelector('#id'),
    psword = document.querySelector('#psword'),
    loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: psword.value,
    };
    console.log(req);
} 