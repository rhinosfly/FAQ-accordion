class FaqItem {
  static TEMPLETE_ID = "faq-dropdown-item";
  static template = document.getElementById(this.TEMPLETE_ID).content;

  constructor(question, answer) {
    // setup data
    this.question = question;
    this.answer = answer;
    this.dropdown_is_active = true;
  }

  init_HTML(parent) {
    // create html element
    const template_instance = FaqItem.template.cloneNode(true);
    this.html_element = template_instance.firstElementChild;
    // set up property shortcuts
    this.html_question = this.html_element.querySelector(".question");
    this.html_answer = this.html_element.querySelector(".answer");
    this.html_dropdown = this.html_element.querySelector(".dropdown");
    this.html_button = this.html_element.querySelector(
      ".dropdown-toggle-button",
    );
    // set up DOM object
    this.html_button.addEventListener("click", this.toggle_dropdown.bind(this));
    this.render();
    // add to DOM
    parent.appendChild(template_instance);
  }

  render() {
    this.html_question.textContent = this.question;
    this.html_answer.textContent = this.answer;
  }

  toggle_dropdown() {
    //toggle dropdown hidden state
    this.html_dropdown.classList.toggle("hidden");
    //change icon
    const plus = "assets/images/icon-plus.svg";
    const minus = "assets/images/icon-minus.svg";
    // toggle flag
    this.dropdown_is_active = !this.dropdown_is_active;
    if (this.dropdown_is_active) {
      this.html_button.src = minus;
    } else {
      this.html_button.src = plus;
    }
  }
}

// define data
const FAQ_ITEMS = [
  new FaqItem(
    "What is Frontend Mentor, and how will it help me?",
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  ),
  new FaqItem(
    "Is Frontend Mentor free?",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  ),
  new FaqItem(
    "Can I use Frontend Mentor projects in my portfolio?",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  ),
  new FaqItem(
    "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  ),
];

// initialze html template objects
let faq_card = document.querySelector(".faq-card");

FAQ_ITEMS.forEach((faq_item) => {
  faq_item.init_HTML(faq_card);
});
