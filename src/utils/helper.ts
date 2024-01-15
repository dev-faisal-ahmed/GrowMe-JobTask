import { UserType } from "./types";

export function setUserToLocal(user: UserType) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocal() {
  const userStr = localStorage.getItem("user");
  if (!userStr) return null;
  const user = JSON.parse(userStr) as UserType;
  return user;
}
