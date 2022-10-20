import getUserByID from "../apiServices/user/getUserById.js"
import { getCookie } from "../utils/libCookie.js"
import getAllResearch from "../apiServices/research/getAllResearch.js";
import getAllExam from "../apiServices/exam/getAllExam.js";

// console.log(buttonAvatar);

async function getUser() {
    const idUser = getCookie("idUser")
    const user = await getUserByID(idUser)

    const buttonAvatar = document.getElementById("buttonAvatar");
    const buttonRegister = document.getElementById("buttonRegister");
    const nameUser = document.getElementById("nameUser");
    // const buttonProfile = document.getElementById("buttonProfile");
    if (user) {
        buttonRegister.style.display = "none";
        buttonAvatar.style.display = "block";
        const fullName = user.firstName + " " + user.lastName;
        nameUser.innerText = fullName;
        console.log(buttonAvatar.style);
    }
}
console.log(getUser());


async function getDataResearch () {
    const data = await getAllResearch()
    console.log(data);
}

getDataResearch()

async function getDataExam () {
    const data = await getAllExam()
    console.log(data);  
}

getDataExam()


