// import axios from "axios";
import loginUser from "../apiServices/user/loginUser.js";
import registerUser from "../apiServices/user/registerUser.js";



// const email = document.querySelector(".input__email")
// console.log(email);
// console.log(email.value);

// async function testApi() {

//     const user = {
//         email:"trinhminhnhatxt123@gmail.com",
//         password: "nhat17112002"
//     }

//     const res = await loginUser(user)
//     console.log(res);
//     const name = document.createElement("h2")
//     name.innerText(res.email)
//     document.append(name)
//     console.log(name);
// }


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

handerLogin;


buttonLogin.addEventListener('click', (e) => handerLogin(e));

// đăng ký

const buttonRegister = document.querySelector(".buttonRegister");
console.log(buttonRegister);

const isLecturers = document.querySelector("#pickGV");
const isStudent = document.querySelector("#pickSV");

console.log(isLecturers);
console.log(isStudent);

// async function handerRegister(e) {
//     e.preventDefault()
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const emailRegister = document.getElementById("emailRegister").value;
//     const personCode = document.getElementById("personCode").value;
//     const passwordRegister = document.getElementById("passwordRegister").value;
//     const passwordRegisterAgain = document.getElementById('passwordRegisterAgain').value;

//     const user = {
//         firstName: firstName,
//         lastName: lastName,
//         email: emailRegister,
//         password: passwordRegister,
//         codeSudentOrLecturers: personCode,
//         isLecturers: 0,
//         isStudent,

//     }
//     const res = await loginRegister(user)
//     console.log(res);
//     if (res) {
//         // window.location = "/index.html"
//     }

// }

// buttonRegister.addEventListener('click', (e) => handerRegister(e));




