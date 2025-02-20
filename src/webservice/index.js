import axios from "axios";

function getProducts() {
  return axios.get("http://0.0.0.0:3000/products");
}

function getCategory() {
  return axios.get("http://0.0.0.0:3000/categories");
}

export default {
  getProducts: getProducts,
  getCategory: getCategory
}
