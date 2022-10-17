import { getCookie } from "../../utils/libCookie";
import { post } from "../../utils/request";

/**
 *
 * @param {*} idSubject
 * @param {*} data
 * @returns
 * Data ở đây cũng cần sử dụng FormData để tạo và tên của trường đó là imgSchool
 */

const updateImgSubject = async (idSubject, data) => {
  try {
    const idToken = getCookie("idToken");
    const res = await post(`subject/update/image/${idSubject}`, data, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateImgSubject;
