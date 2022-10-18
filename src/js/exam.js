import getExam from "../apiServices/exam/getAllExam.js"
// import getExamByIdDepartment from "../apiServices/exam/getExamByIdDepartment.js"
// import getExamByIdSubject from "../apiServices/exam/getExamByIdSubject.js"
// import getExamBy2Id from "../apiServices/exam/getExamBy2Id.js"
// import getExamByName from "../apiServices/exam/getExamByName.js"
import getImgSchool from "../apiServices/subject/getImgSchool.js"
import getUserById from "../apiServices/user/getUserById.js"

async function getUser(id) {
    const user = await getUserById(id)
    if (user) {
        return user
    }
}

const getAllExam = async () => {
    const data = await getExam()
    if(data) {
        const container = document.querySelector(".box__exam")
        // var codeHtml = "";
        
         data.forEach(async(item, index) => {
            const idUser = item.idUserPost
            const user = await getUserById(idUser)
            const fullName = `${user.firstName} ${user.lastName}`
            const nameExam = item.name
            const date = item.createAt
            const idSubject = item.idExamSubject
            const imgSchool = await getImgSchool(idSubject)
            const status = item.isPublic
            console.log("status", status);
            if (status == true) {
            const codeHtml =  `
            <article class="bg-white p-4 rounded-2xl pb-5 mt-5 block mx-3">
        <figure class="mh-posts-list-thumb" style="width: 16%">
          <img src="${imgSchool ? imgSchool : "/src/img/logo-hus.png"}" alt="">
        </figure>
        <div class="mh-posts-list-content clearfix">
          <header class="mh-posts-list-header">
            <h3 class="entry-title mh-posts-list-title">
              <a href="ViewerPage.html"
                title="Đề thi và đáp án tham khảo Cơ sở hóa học vật liệu kỳ 2 năm học 2021-2022 – HUS" rel="bookmark"
                class="text-gray-800">
                ${nameExam}</a>
            </h3>
            <div class="mh-meta entry-meta">
              <span class="entry-meta-date updated"><i class="fa-regular fa-clock mr-1"></i><a class="mr-2"
                 >${date}</a></span>
              <span class="entry-meta-comments"><i class="fa-regular fa-human mr-1"></i><a class="mr-2" href="#"
                  class="mh-comment-count-link">Người đăng: ${fullName}</a></span>
            </div>
          </header>
          <div class="mh-posts-list-excerpt clearfix">
            <div class="text-gray-800">
              <p>Đề thi và đáp án tham khảo môn Giải Tích 1 kỳ 2 năm học 2021-2022 – HUS Đề thi Cơ sở hóa học vật liệu
                đề số 1 kỳ 1 năm học <a class="text-gray-800-more"
                  href="https://tailieuvnu.com/de-thi-va-dap-an-tham-khao-co-so-hoa-hoc-vat-lieu-ky-2-nam-hoc-2021-2022-hus/"
                  title="Đề thi và đáp án tham khảo Cơ sở hóa học vật liệu kỳ 2 năm học 2021-2022 – HUS">[&#8230;]</a>
              </p>
          </div>
        </div>
        
      </article>`

          const div = document.createElement("div")
          div.innerHTML = codeHtml
          container.appendChild(div)
            }
        });
        // console.log(codeHtml);
      }
}

getAllExam()