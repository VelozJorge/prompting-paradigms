document.addEventListener("DOMContentLoaded", () => {
  const promptMap = {
    product: "“I own a small gift shop in Kingston, Ontario. What AI tools or digital strategies would help me attract more local customers without spending too much?”",
    legal: "“As a newcomer to Canada, I’m having problems with my landlord not fixing things. What are my rights as a tenant in Ontario?”",
    mental: "“I’ve been feeling overwhelmed lately and can’t focus at work. Do you have any advice that could help me manage stress?”"
  };

  const dropdown = document.getElementById("scenarioDropdown");
  const promptDisplay = document.getElementById("scenarioPrompt");

  dropdown.addEventListener("change", () => {
    const selected = dropdown.value;
    promptDisplay.innerHTML = `<p><strong>Prompt:</strong> ${promptMap[selected]}</p>`;
  });

  dropdown.dispatchEvent(new Event("change"));
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
