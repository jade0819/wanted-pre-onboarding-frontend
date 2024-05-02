import { PATH_NAME } from "../constants/routes";

// AuthService Interface
// signin(email, password):Promise<void>
// signup(email, password):Promise<void>
// logout():void
// isLogin():boolean

export class AuthService {
  constructor(httpClient, storage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  async signin(email, password, navigate) {
    try {
      const response = await this.httpClient.fetch("/auth/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
        },
      });

      const { access_token } = await response.data;
      this.storage.save(access_token);

      navigate(PATH_NAME.TODOS);
    } catch (error) {
      console.log(error);
      alert("아이디와 비밀번호를 확인해주세요");
    }
  }

  async signup(email, password, navigate) {
    try {
      await this.httpClient.fetch("/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
        },
      });

      alert("회원가입 완료!");
      navigate(PATH_NAME.SIGNIN);
    } catch (error) {
      console.log(error);
      alert("아이디와 비밀번호를 확인해주세요");
    }
  }

  logout() {
    this.storage.delete();
  }

  isLogin() {
    const token = this.storage.get();

    return !!token;
  }
}
