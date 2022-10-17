import { getCookie } from "../../utils/libCookie";
import { get } from "../../utils/request";

const logoutUser = async () => {
  try {
    const idToken = getCookie("idToken");
    const res = await get("/user/logout", {
      headers: {
        idtoken: idToken,
      },
    });
    document.cookie = "idToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default logoutUser;
