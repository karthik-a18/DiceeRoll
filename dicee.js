document.getElementById("rollButton").addEventListener("click", function () {
    var randomnumber1 = Math.floor(Math.random() * 6) + 1;
    var randomdiceesource1 = "images/dice" + randomnumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomdiceesource1);
  
    var randomnumber2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceesource2 = "images/dice" + randomnumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomdiceesource2);
  
    if (randomnumber1 > randomnumber2) {
      document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
    } else if (randomnumber2 > randomnumber1) {
      document.querySelector("h1").innerHTML = "🎉 Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "🤝 It's a Draw!";
    }
  });
  