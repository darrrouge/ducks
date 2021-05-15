window.addEventListener("load", function () {
  let count = 0;
  let label = document.getElementsByClassName("duck");
  for (let i = 0; i < label.length; i++) {
    label[i].onclick = function () {
      count++;
      if (count == 3) {
        alert("You win!");
      }
    };
  }
});
