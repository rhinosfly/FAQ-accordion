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
