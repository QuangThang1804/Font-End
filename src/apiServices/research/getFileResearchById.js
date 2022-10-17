import { get } from "../../utils/request";

/**
 *
 * @param {*} id (id bài báo cần lấy ảnh)
 * @returns
 */

const getImageResearchbyId = async (id) => {
  try {
    const res = get(`research/file/${id}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export default getImageResearchbyId;
