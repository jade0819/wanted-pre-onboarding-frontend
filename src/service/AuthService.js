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

  async signin(email, password) {
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
  }

  async signup(email, password) {
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
  }

  logout() {
    this.storage.delete();
  }

  isLogin() {
    const token = this.storage.get();

    return !!token;
  }
}
