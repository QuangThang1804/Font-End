import { get } from "../../utils/request.js";
import b64toBlob from "../../utils/base64toBolb";

const getImgSchool = async (idSubject) => {
  try {
    const res = await get(`/subject/img/${idSubject}`);
    const uri = `data:${res.type};base64,` + res.data;
    return uri;
  } catch (error) {
    console.log(error);
  }
};

export default getImgSchool;
