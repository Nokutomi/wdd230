const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    li.textContent = input.value.trim();
    li.setAttribute("aria-label", `Remove ${input.value.trim()}`);
    delBtn.textContent = "❌";
    li.appendChild(delBtn);
    list.appendChild(li);
    delBtn.addEventListener("click", () => list.removeChild(li));
    input.value = "";
    input.focus();
  } else {
    input.focus();
  }
});
