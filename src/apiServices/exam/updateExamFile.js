import { getCookie } from "../utils/libCookie";
import { put } from "../utils/request";

/**
 * @param {*} idExam
 * @param {*} data
 * @returns
 * Data ở đây dùng FormData
 */

const updateExamFile = async (idExam, data) => {
  try {
    const idToken = getCookie("idToken");
    const res = await put(`/exam/updateFile/${idExam}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateExamFile;
