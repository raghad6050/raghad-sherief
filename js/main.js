// FAQ Toggle
document.querySelectorAll(".faq h3").forEach((faqHeader) => {
  faqHeader.addEventListener("click", () => {
    const content = faqHeader.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
