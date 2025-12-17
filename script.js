//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all grid colors first
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change selected block color
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", () => {
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});
