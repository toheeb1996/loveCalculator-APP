function cleared() {
  // console.log("I have been cleared")
  // alert("i have been cleared")
  document.getElementById("button").innerHTML = " "
  document.getElementById("button2").innerHTML = " "
  document.getElementById("input1").value = " "
  document.getElementById("input2").value = " "
}

  function love() {
    var love = document.getElementById("input1").value
    var like = document.getElementById("input2").value
    var loveApp = Math.ceil(Math.random() * 100)

    if (!love || !like) {
      document.getElementById("button").innerHTML = "Please input Male"
      document.getElementById("button2").innerHTML = "Please input Female"
      document.body.style.backgroundColor = "black"
      // alert("shut up")
    }

    else if (loveApp >= 0 && loveApp <= 15) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "she is a scam " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "blue"
    }

    else if (loveApp >= 16 && loveApp <= 30) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "you are doing well " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "purple"
    }

    else if (loveApp >= 31 && loveApp <= 45) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "you are on track " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "green"
    }

    else if (loveApp >= 46 && loveApp <= 60) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "you are going higher " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "lightblue"
    }

    else if (loveApp >= 61 && loveApp <= 75) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "get set " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "teal"
    }

    else if (loveApp >= 76 && loveApp <= 90) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "it's almost done " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "pink"
    }

    else if (loveApp >= 91 && loveApp <= 100) {
      document.getElementById("button").innerHTML = loveApp + "%"
      document.getElementById("button2").innerHTML = "Go and marry " + "<button onclick='cleared()' class='reset'>reset</button>"
      document.body.style.backgroundColor = "red"
    }

    else {
      document.getElementById("button").innerHTML = "input"
      document.getElementById("button2").innerHTML = "input"
    }
  }



  function loveApp() {
    var loveApp = Math.ceil(Math.random() * 100)
    if (loveApp) {
      document.getElementById("button").innerHTML = loveApp + "%"
    }

    if (loveApp >= 0 && loveApp <= 15) {
      document.getElementById("button2").innerHTML = "she is a scam"
      document.body.style.backgroundColor = "black"
    }

    else if (loveApp >= 16 && loveApp <= 30) {
      document.getElementById("button2").innerHTML = "you are doing well"
      document.body.style.backgroundColor = "purple"
    }

    else if (loveApp >= 31 && loveApp <= 45) {
      document.getElementById("button2").innerHTML = "you are on track"
      document.body.style.backgroundColor = "green"
    }

    else if (loveApp >= 46 && loveApp <= 60) {
      document.getElementById("button2").innerHTML = "you are going higher"
      document.body.style.backgroundColor = "lightblue"
    }

    else if (loveApp >= 61 && loveApp <= 75) {
      document.getElementById("button2").innerHTML = "get set"
      document.body.style.backgroundColor = "lighblue"
    }

    else if (loveApp >= 76 && loveApp <= 90) {
      document.getElementById("button2").innerHTML = "it's almost done"
      document.body.style.backgroundColor = "pink"
    }

    else if (loveApp >= 91 && loveApp <= 100) {
      document.getElementById("button2").innerHTML = "Go and marry"
      document.body.style.backgroundColor = "red"
    }

    else {
      document.getElementById("button2").innerHTML = "input"
    }
  }