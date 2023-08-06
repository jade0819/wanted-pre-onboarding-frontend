import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function signin(params) {
  return apiClient
    .post("/auth/signin", params)
    .then((res) => {
      return { accessToken: res.data.access_token };
    })
    .catch((error) => {
      const status = error.response?.status;
      let msg = "";

      if (status === 401) {
        msg =
          "비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.";
      } else if (status === 404) {
        msg =
          "해당 사용자가 존재하지 않습니다.\n입력하신 내용을 다시 확인해주세요.";
      } else {
        msg = `알 수 없는 오류가 발생했습니다. (에러코드(${status})`;
      }

      throw new Error(msg);
    });
}

export async function signup(params) {
  return apiClient
    .post("/auth/signup", params)
    .then((res) => res.data)
    .catch((error) => {
      const status = error.response?.status;
      let msg = "";

      if (status === 400) {
        msg = "동일한 이메일이 이미 존재합니다.";
      } else {
        msg = `알 수 없는 오류가 발생했습니다. (에러코드(${status})`;
      }

      throw new Error(msg);
    });
}
