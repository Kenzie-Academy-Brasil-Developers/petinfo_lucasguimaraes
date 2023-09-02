const baseUrl = "http://localhost:3333";
const token = localStorage.getItem("@petinfo:token");
import { toast } from "./toast.js";
export const green = "#168821";
export const red = "#df1545";

const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// Informações de usuário logado
export async function getCurrentUserInfo() {
  const request = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders,
  });
  const user = await request.json();

  return user;
}

// Listagem de posts
export async function getAllPosts() {
  const request = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: requestHeaders,
  });
  const posts = await request.json();
  return posts;
}

// Login Request

export const loginRequest = async (requestBody) => {
  const token = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  }).then(async (res) => {
    const resConverted = await res.json();

    if (res.ok) {
      toast("Login realizado com sucesso!", green);
      localStorage.setItem("petinfo:token", resConverted.token);
      localStorage.setItem("petinfo:name", resConverted.name);

      setTimeout(() => {
        location.replace("./src/pages/feed.html");
      }, 1000);

      return resConverted;
    } else {
      toast(resConverted.message, red);
    }
  });

  return token;
};
