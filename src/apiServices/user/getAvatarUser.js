import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request";

const getAvatarUser = async (idUser) => {
  try {
    const idToken = getCookie("idToken");
    const res = await get(`/user/avatar/${idUser}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getAvatarUser;
