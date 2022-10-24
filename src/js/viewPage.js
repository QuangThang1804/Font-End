import getUserById from "../apiServices/user/getUserById.js";
import getAllExam from "../apiServices/exam/getAllExam.js";


async function getUser(id) {
    const user = await getUserById(id)
    if (user) {
        return user
    }
}


