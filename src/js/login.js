import loginUser from "../apiServices/user/loginUser.js";

const buttonLogin = document.querySelector(".button-login");
async function handerLogin(e) {
    e.preventDefault()
    const textemail = document.querySelector(".emailLogin").value;
    const userpasswordLogin = document.querySelector(".passwordLogin").value;
    const user = {
        email: textemail,
        password: userpasswordLogin
    }
    const res = await loginUser(user)
    console.log(res);
    if (res) {
        // window.location = "/index.html"
    }
}

buttonLogin.addEventListener('click', (e) => handerLogin(e));