import { get } from "../utils/request";

/**
 * @param {*} idDepartment (Mã khoa)
 * @param {*} page (Trang)
 * @returns
 */

const getExamByIdDepartment = async (idDepartment, page = 1) => {
  try {
    const res = await get(`exam/?idDepartment=${idDepartment}&page=${page}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getExamByIdDepartment;
