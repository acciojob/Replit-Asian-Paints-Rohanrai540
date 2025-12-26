//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change selected block color
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});

