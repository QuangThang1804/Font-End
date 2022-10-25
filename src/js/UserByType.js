import allUserByType from "../apiServices/user/getAllUserByType.js";
import getUserById from "../apiServices/user/getUserById.js";
import { getCookie } from "../utils/libCookie.js";
import getAllUser from "../apiServices/user/getAllUser.js"
import deleteUser from "../apiServices/user/deleteUser.js";
import getAvatarUser from "../apiServices/user/getAvatarUser.js";

const table = document.getElementById("table");

async function getAllUserByType(type) {
  const users = await allUserByType(type);
  // console.log(users);
}

const test = () => console.log("sdfgdsyh");

// render danh sách sinh viên
const buttonStudent = document.querySelector("#buttonStudent");

async function renderStudent() {
  const allStudent = await allUserByType("student");
  let codeHtml = '';
  allStudent.forEach(async (item, index) => {
    const maSV = item.codeSudentOrLecturers;
    const fullName = `${item.firstName} ${item.lastName}`;
    const typePeople = (item.isStudent) ? "Sinh viên" : "Giảng viên";
    // const avatar = await getAvatarUser(item._id)
    table.innerHTML = '';

    
    
    codeHtml += `
      <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-4 py-3 text-sm">
        
        <h2 class="text-pi"> ${++index} </h2>
      </td>
      <td class="px-4 py-3 text-sm">
        <!-- MSV-->
        <h2 id="maSV" class="text-purple-800"> ${maSV} </h2>
      </td>
      <td class="px-4 py-3">
        <div class="flex items-center text-sm">
          <!-- Avatar with inset shadow -->
          <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img class="object-cover w-full h-full rounded-full"
            src="/src/img/Avatar-Facebook-trắng.jpg"}
              alt="" loading="lazy" />
            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
          </div>
          <div>
            <p id="fullName" class="font-semibold">${fullName}</p>
            <p class="typeOfPerson" class="text-xs text-gray-600 dark:text-gray-400">
              ${typePeople}
            </p>
          </div>
        </div>
      </td>
      <td class="px-4 py-3 text-sm">
        <!-- link đề tài-->
      </td>
      <td class="px-4 py-3 text-xs">
        <span id="trangThai"
          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
          Approved
        </span>
      </td>
      <td id="date" class="px-4 py-3 text-sm">  
        08/10/2022
      </td>
      <td class="px-4 py-3">
        <div class="flex items-center space-x-4 text-sm">
          <button
            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
              </path>
            </svg>
          </button>
          <button id = "buttonDelete" keyId = ${item._id}
            class="delete__user flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Delete">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </td>
      </tr>
      `
    // const tr = document.createElement("tr")
    // tr.innerHTML = codeHtml;
    
    
  });
  
  //   document.querySelector("#buttonDelete").onclick = async function deleteSomeOne() {
    //     const deleteU = await deleteUser(item._id);
    //     console.log(deleteU);
    //     tr.style.display = "none";
    // };
    table.innerHTML = codeHtml;
    const allButtonDelete = document.getElementsByClassName("delete__user");
    for (let index = 0; index < allButtonDelete.length; index++) {
      const element = allButtonDelete[index];
      element.addEventListener("click", async () => {
        const statusDelete = await deleteUser(element.getAttribute("keyId"))
        console.log(statusDelete);
        renderStudent()
      })
    }
}

buttonStudent.onclick = renderStudent;


// render danh sách giảng viên
const buttonLecturers = document.querySelector("#buttonLecturers");

async function renderLecturer() {
  const allLecturers = await allUserByType("lecturers");
  let codeHtml = '';
  allLecturers.forEach(async (item, index) => {
    const maSV = item.codeSudentOrLecturers;
    const fullName = `${item.firstName} ${item.lastName}`;
    const typePeople = (item.isLecturers) ? "Giảng viên" : "Sinh viên";

    codeHtml += `
      <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-4 py-3 text-sm">
        
        <h2 class="text-pi"> ${++index} </h2>
      </td>
      <td class="px-4 py-3 text-sm">
        <!-- MSV-->
        <h2 id="maSV" class="text-purple-800"> ${maSV} </h2>
      </td>
      <td class="px-4 py-3">
        <div class="flex items-center text-sm">
          <!-- Avatar with inset shadow -->
          <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img class="object-cover w-full h-full rounded-full"
            src="/src/img/Avatar-Facebook-trắng.jpg"}
              alt="" loading="lazy" />
            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
          </div>
          <div>
            <p id="fullName" class="font-semibold">${fullName}</p>
            <p class="typeOfPerson" class="text-xs text-gray-600 dark:text-gray-400">
              ${typePeople}
            </p>
          </div>
        </div>
      </td>
      <td class="px-4 py-3 text-sm">
        <!-- link đề tài-->
      </td>
      <td class="px-4 py-3 text-xs">
        <span id="trangThai"
          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
          Approved
        </span>
      </td>
      <td id="date" class="px-4 py-3 text-sm">  
        08/10/2022
      </td>
      <td class="px-4 py-3">
        <div class="flex items-center space-x-4 text-sm">
          <button
            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
              </path>
            </svg>
          </button>
          <button keyId=${item._id}
            class="delete__lecturers flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Delete">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </td>
      </tr>
      `
  });
  table.innerHTML = codeHtml;
  const allButtonDelete = document.getElementsByClassName("delete__lecturers");
    for (let index = 0; index < allButtonDelete.length; index++) {
      const element = allButtonDelete[index];
      element.addEventListener("click", async () => {
        const statusDelete = await deleteUser(element.getAttribute("keyId"))
        console.log(statusDelete);
        renderLecturer()
      })
    }
}

buttonLecturers.onclick = renderLecturer;
