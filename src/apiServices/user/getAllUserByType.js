import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request";

/**
 * @param {*} type
 * type là kiểu danh sách muốn lấy như student, , examteacher
 * Lấy idToken đã lưu khi lofin để truyền vào làm đối số
 */
const getAlluserByType = async (type) => {
  try {
    const idToken = getCookie("idToken");
    const res = await get(`/user/?type=${type}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAlluserByType;
