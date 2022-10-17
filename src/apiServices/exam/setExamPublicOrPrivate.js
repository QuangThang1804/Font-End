import { getCookie } from "../../utils/libCookie";
import { put } from "../../utils/request";

const setExamPublicOrPrivate = async (idExam, isPublic) => {
  try {
    const idToken = getCookie("idToken");
    const res = await put(
      `exam/update/public/${idExam}`,
      { isPublic },
      {
        headers: {
          idtoken: idToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default setExamPublicOrPrivate;
