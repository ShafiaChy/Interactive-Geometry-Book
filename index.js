let sum = 0;

//display input fields
function toggle(type) {
  document.getElementById(type + "-input-field").className = "d-block";
}

function takeInput(type) {
  if (type == "circle") {
    // Take the values from the input fields
    const radius = document.getElementById("custom-radius").value;

    //validation
    if (radius === "" || radius < 0) {
      return alert("Invalid input");
    } else {
      // Place value as the default value
      document.getElementById("default-radius").innerText = radius;

      // clear the input field
      document.getElementById("default-radius").value = "";

      //hide the input fields
      document.getElementById("circle-input-field").className = "d-none";
    }
  }
  if (type == "rectangle") {
    // Take the values from the input fields
    const length = document.getElementById("custom-length").value;
    const breadth = document.getElementById("custom-breadth").value;

    //vaidation
    if (length == "" || breadth == "" || length < 0 || breadth < 0) {
      return alert("Invalid input");
    } else {
      // Place values as the default values
      document.getElementById("default-length").innerText = length;
      document.getElementById("default-breadth").innerText = breadth;
      // clear the input fields
      document.getElementById("custom-length").value = "";
      document.getElementById("custom-breadth").value = "";

      //hide the input fields
      document.getElementById("rectangle-input-field").className = "d-none";
    }
  }
}

function calculateArea(type) {
  if (type == "circle") {
    const defaultValue = document.getElementById("default-radius").innerText;

    const circleArea = 3.14 * defaultValue * defaultValue;
    document.getElementById("circle-area").innerText = circleArea;

    totalArea(circleArea);
  }
  if (type == "rectangle") {
    const defaultLength = document.getElementById("default-length").innerText;
    const defaultBreadth = document.getElementById("default-breadth").innerText;

    const rectangleArea = defaultLength * defaultBreadth;
    document.getElementById("rectangle-area").innerText = rectangleArea;

    totalArea(rectangleArea);
  }
}

function totalArea(value) {
  sum += value;
  document.getElementById("total-area-in-cm").innerText = sum;
}

function totalMeterSquareArea() {
  const conversion = document.getElementById("total-area-in-cm").innerText;
  const areaInMeterSquare = parseFloat(conversion / 10000);
  document.getElementById("total-area-in-m").innerText = areaInMeterSquare;
}

//generate random colors on double click
document.getElementById("circle").addEventListener("dblclick", (event) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("circle").style.backgroundColor = "#" + randomColor;
});

document.getElementById("rectangle").addEventListener("dblclick", (event) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("rectangle").style.backgroundColor =
    "#" + randomColor;
});
