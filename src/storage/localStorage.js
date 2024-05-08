// Storage Interface
// save(token):void
// get():string
// delete():void

export class LocalStorage {
  #key;

  constructor() {
    this.#key = "ACCESS_TOKEN";
  }

  save(token) {
    localStorage.setItem(this.#key, token);
  }

  get() {
    return localStorage.getItem(this.#key);
  }

  delete() {
    localStorage.removeItem(this.#key);
  }
}
