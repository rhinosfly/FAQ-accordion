// templating =================================

// class to store data
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
    const template_instance = FaqItem.template.cloneNode(true);
    this.html_element = template_instance.firstElementChild;
    this.render();
    parent.appendChild(template_instance);

    // set button
    let button = this.html_element.getElementsByClassName(
      "dropdown-toggle-button",
    )[0];
    button.addEventListener("click", this.toggle_dropdown.bind(this));
  }

  render() {
    this.html_element.querySelector(".question").textContent = this.question;
    this.html_element.querySelector(".answer").textContent = this.answer;
  }

  toggle_dropdown() {
    //toggle dropdown hidden state
    let dropdown = this.html_element.getElementsByClassName("dropdown")[0];
    dropdown.classList.toggle("hidden");
    //change icon
    const plus = "assets/images/icon-plus.svg";
    const minus = "assets/images/icon-minus.svg";
    let button = this.html_element.getElementsByClassName(
      "dropdown-toggle-button",
    )[0];
    // toggle flag
    this.dropdown_is_active = !this.dropdown_is_active;
    if (this.dropdown_is_active) {
      button.src = minus;
    } else {
      button.src = plus;
    }
  }
}

// actual data to put in templates
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

// create templates
let faq_card = document.getElementsByClassName("faq-card")[0];

FAQ_ITEMS.forEach((faq_item) => {
  faq_item.init_HTML(faq_card);
});
