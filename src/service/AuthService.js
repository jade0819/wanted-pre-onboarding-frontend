// AuthService Interface
// signin(email, password):Promise<void>
// signup(email, password):Promise<void>
// logout():void

export class AuthService {
  constructor(httpClient, storage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  signin(email, password) {
    this.httpClient.fetch("/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });
  }

  signup(email, password) {
    this.httpClient.fetch("/auth/signup", {
      method: "POST",
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
}
