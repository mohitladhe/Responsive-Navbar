function toggleSidebarOpen() {
  const sidebar = document.getElementById("sidebar");
  const blur = document.querySelector(".blur-screen");
  sidebar.classList.add("open");
  sidebar.classList.remove("close");
  blur.style.display = "block";
}

function toggleSidebarClose() {
  const sidebar = document.getElementById("sidebar");
  const blur = document.querySelector(".blur-screen");
  sidebar.classList.add("close");
  sidebar.classList.remove("open");
  blur.style.display = "none";
}
document
  .querySelector(".blur-screen")
  .addEventListener("click", toggleSidebarClose);
