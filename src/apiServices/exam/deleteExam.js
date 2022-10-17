import { getCookie } from "../utils/libCookie";
import { deletee } from "../utils/request";

const deleteExam = async (idExam) => {
  try {
    const idToken = getCookie("idToken");
    const res = await deletee(`/exam/delete/${idExam}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default deleteExam;
