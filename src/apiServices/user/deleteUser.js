import { getCookie } from "../../utils/libCookie";
import { deletee } from "../../utils/request";

const deleteUser = async (idUser) => {
  try {
    const idToken = getCookie("idToken");
    const res = await deletee(`/user/delete/${idUser}`, {
      headers: {
        idtoken: idToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default deleteUser;
