class InputHandler {
  constructor() {
    console.log("InputHandler instantiated");
    this.adapter = new Adapter();
    this.initBindingsAndEventListeners();
  }
  initBindingsAndEventListeners() {
    console.log("event bindings triggered");
    this.form = document.getElementById("number-form");
    this.form.addEventListener("submit", this.submitInputNumber.bind(this));
  }

  submitInputNumber(event) {
    event.preventDefault();
    const input = document.getElementById("input").value;
    this.adapter
      .postInput(parseInt(input, 10))
      .then((response) => this.renderOutput(response.output));
  }

  renderOutput(integer) {
    const box = document.createElement("div");
    box.innerHTML = `${integer}`;
    document.body.appendChild(box);
  }
}
