//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  const selected = document.getElementById(blockId);
  if (selected) {
    selected.style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});


