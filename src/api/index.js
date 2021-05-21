/* eslint-disable no-useless-catch */
import axios from "axios";

const BASE = "https://jsonplace-univclone.herokuapp.com";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUser = async (userId) => {
  try {
    const { data } = await axios.get(`${BASE}/users/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTodosByUser = async (userId) => {
  try {
    const { data } = await axios.get(`${BASE}/users/${userId}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
};
