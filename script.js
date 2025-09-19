const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

// استرجاع الثيم المحفوظ
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.textContent = "☀️";
}

// عند الضغط على الزر
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
