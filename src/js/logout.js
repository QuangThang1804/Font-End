import logoutUser from "../apiServices/user/logoutUser.js";

const buttonLogout = document.getElementById("buttonLogout");
console.log(buttonLogout);

async function handerLogout() {
    const res = await logoutUser()
    const buttonAvatar = document.getElementById("buttonAvatar");
    const buttonRegister = document.getElementById("buttonRegister");
    buttonRegister.style.display = "block";
    buttonAvatar.style.display = "none";
    console.log(buttonAvatar);
    console.log("res", res)
}

buttonLogout.addEventListener('click', handerLogout);