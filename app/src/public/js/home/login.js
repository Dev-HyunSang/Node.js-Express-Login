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
    console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.herf = "/";
        } else {
            alert(res.message);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
} 