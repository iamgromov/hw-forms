const button = document.querySelector(".button");
const popover = document.querySelector("#popover");

export function showPopover() {
  let position = button.getBoundingClientRect();
  let triangleHeight = 20;

  button.removeEventListener("click", showPopover);
  popover.classList.add("popover_wrapper");
  popover.classList.remove("display_none");
  popover.style.top =
    position.top - popover.offsetHeight - triangleHeight + "px";
  popover.style.left =
    position.left + (button.offsetWidth - popover.offsetWidth) / 2 + "px";
  button.addEventListener("click", removePopover);
}

export function removePopover() {
  popover.classList.remove("popover_wrapper");
  popover.classList.add("display_none");
  button.addEventListener("click", showPopover);
}

button.addEventListener("click", showPopover);
