import Axios from "axios";

import { Category } from "../../data";
import { object } from "yup";

export const CategoriesTypes = {
  FETCH_CATEGORIES: "FETCH_CATEGORIES"
};

Axios.defaults.baseURL = "https://knack-v2.herokuapp.com/";

export const fetchCategories = async () => {
  try {
    const { data } = await Axios.get("/categories");
    const categories = data.map((info: any) => {
      return {
        id: info.id,
        title: info.attributes.name,
        imgUrl: info.attributes.imgUrl || "",
        link: info.links.self
      };
    });
  } catch (err) {
    console.log(err);
  }
};
