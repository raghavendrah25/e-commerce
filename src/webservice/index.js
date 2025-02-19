import axios from "axios";

function getProducts() {
  return axios.get("http://0.0.0.0:8080/products");
}

function getCategory() {
  return axios.get("http://0.0.0.0:8080/categories");
}

export default {
  getProducts: getProducts,
  getCategory: getCategory
}
