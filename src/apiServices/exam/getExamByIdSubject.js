import { get } from "../utils/request";

/**
 * @param {*} idSubject (Mã chủ đề)
 * @param {*} page (Trang)
 * @returns
 */

const getExamByIdSubject = async (idSubject, page = 1) => {
  try {
    const res = await get(`exam/?idSubject=${idSubject}&page=${page}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getExamByIdSubject;
