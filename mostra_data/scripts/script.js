const title = document.querySelector(".title");

const date = new Date();

title.innerHTML = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
}).format(date);
