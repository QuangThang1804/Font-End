import { getCookie } from "../../utils/libCookie.js";
import { get } from "../../utils/request.js";

/**
 * 
 * type là kiểu danh sách muốn lấy như student, lecturers
 * Lấy idToken đã lưu khi lofin để truyền vào làm đối số
 */
const getAllUser = async () => {
  try {
    const idToken = getCookie("idToken");
    const idUser = getCookie("idUser");
    const res = await get(`/user`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllUser;
