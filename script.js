// templating =================================

class FaqItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

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

let dropdown_template = document.getElementById("faq-dropdown-item").content;
let faq_cards = document.getElementsByClassName("faq-card");
FAQ_ITEMS.forEach((data) => {
  const dropdown_item = dropdown_template.cloneNode(true);
  dropdown_item.querySelector(".question").textContent = data.question;
  dropdown_item.querySelector(".answer").textContent = data.answer;
  for (const card of faq_cards) {
    card.appendChild(dropdown_item);
  }
});

//dropdown toggling ==================================

let faqs = document.getElementsByClassName("faq-dropdown-item");
for (let faq of faqs) {
  //initialized to true
  faq.is_active = true;
  // function on faq_card, to run when it's button is clicked
  faq.toggle_state = function () {
    //toggle dropdown hidden state
    dropdown = this.getElementsByClassName("dropdown")[0];
    dropdown.classList.toggle("hidden");
    //change icon
    const plus = "assets/images/icon-plus.svg";
    const minus = "assets/images/icon-minus.svg";
    let button = this.getElementsByClassName("dropdown-toggle-button")[0];
    // toggle flag
    this.is_active = !this.is_active;
    if (this.is_active) {
      button.src = minus;
    } else {
      button.src = plus;
    }
  };

  // attatch function to child buttons callback
  let button = faq.getElementsByClassName("dropdown-toggle-button")[0];
  button.addEventListener("click", function () {
    faq.toggle_state();
  });
}
