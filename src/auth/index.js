import { useParams } from "react-router";

export const storeCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user;
};

export const clearCurrentUser = () => {
  localStorage.removeItem("currentUser");
};
