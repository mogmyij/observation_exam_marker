import axios from "axios";
import { error } from "console";
import { response } from "express";
import { object } from "prop-types";

const baseURL = "http://localhost:3001/cadets";

const getCadet = () => {
  return axios
    .get(baseURL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

const addCadet = (cadetObject: object) => {
  return axios
    .post(baseURL, cadetObject)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { getCadet, addCadet };
