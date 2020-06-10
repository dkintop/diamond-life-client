class Adapter {
  constructor() {
    console.log("Adapter");
    this.baseURL = "http://localhost:8000/api/fibonacci";
  }

  postInput(input) {
    return fetch(this.baseURL, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ param: input }),
    }).then((resp) => resp.json());
  }
}
