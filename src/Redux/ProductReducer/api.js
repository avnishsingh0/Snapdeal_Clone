import axios from "axios";


export const getProductAPI = async (field, params) => {
  let res = await axios.get(
    `https://snapdeal-209x.onrender.com/${field}`,
    params
  );
  let data = res.data;
  let totalCount = res.headers.get("x-total-count");

  return { data, totalCount };
};
