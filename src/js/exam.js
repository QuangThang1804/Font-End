import getExam from "../apiServices/exam/getAllExam.js"
import getExamByIdDepartment from "../apiServices/exam/getExamByIdDepartment.js"
import getExamByIdSubject from "../apiServices/exam/getExamByIdSubject.js"
import getExamBy2Id from "../apiServices/exam/getExamBy2Id.js"
import getExamByName from "../apiServices/exam/getExamByName.js"

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
        //
        //var codeHtml = "";

        data.forEach(async(item, index) => {
            const idUser = item.idUser
            const user = await getUser(idUser)
            const fullName = `${user.firstName} ${user.lastName}`
            const nameExam = item.name
            const descExam = item.desc
            const avatar = await getAvatarUser("63497babfd3001fab0dde337")
            codeHtml += `
            <div class="box__exam--item">
                <div class="box__exam--item--img">
                    <img src="/src/img/Avatar-Facebook-trắng.jpg" alt="">
                </div>
                <div class="box__exam--item--content">
                    <div class="box__exam--item--content--name">
                        <a href="/exam/${item.id}">${nameExam}</a>
                    </div>
                    <div class="box__exam--item--content--desc">
                        <p>${descExam}</p>
                    </div>
                    <div class="box__exam--item--content--user">
                        <div class="box__exam--item--content--user--avatar">
                            <img src="/src/img/Avatar-Facebook-trắng.jpg" alt="">
                        </div>
                        <div class="box__exam--item--content--user--name">
                            <p>${fullName}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        container.innerHTML = codeHtml;
    }

}

getAllExam()