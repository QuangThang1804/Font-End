import getUserByID from "../apiServices/user/getUserById.js"
import { getCookie } from "../utils/libCookie.js"

console.log(buttonAvatar);

async function getUser() {
    const idUser = getCookie("idUser")
    const user = await getUserByID(idUser)

    const buttonAvatar = document.getElementsByClassName("buttonAvatar");
    const buttonRegister = document.getElementById("buttonRegister");
    const nameUser = document.getElementById("nameUser");
    const buttonProfile = document.getElementById("buttonProfile");
    if (user) {
        buttonRegister.style.display = "none";
        buttonAvatar[0].style.display = "block";
        const fullName = user.firstName + " " + user.lastName;
        nameUser.innerText = fullName;
    }
}

getUser()


