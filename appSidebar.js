// SIDEBAR

const btn = document.querySelector(".sidebar-toggle");
const btnCls = document.querySelector(".fa");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

btnCls.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
