var counter = 0;
  document.getElementById('share').onclick = function() {
    if(counter % 2 == 0) {
      document.getElementById('share').style.backgroundColor = "#6E8098";
      document.getElementById('share-path').style.fill = "white";
      document.getElementById('share-container').style.display = "block";
      document.getElementById('triangle').style.display = "block";
    } else {
      document.getElementById('share').style.backgroundColor = "hsl(210, 46%, 95%)";
      document.getElementById('share-path').style.fill = "#6E8098";
      document.getElementById('share-container').style.display = "none";
      document.getElementById('triangle').style.display = "none";
    }
    counter += 1;
  }
