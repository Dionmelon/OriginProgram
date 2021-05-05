var gravity = 9.81;
var velocity = 1.3;
var HeightResult = 0;
var initial_vel = 0;

function heightprediction() {
  var distance = document.Form.distance.value;

  if (distance > 0) {
    heightResult = 0.5 * gravity * Math.pow(distance / velocity, 2);
    document.getElementById("heightResult").textContent =
      heightResult.toFixed(2) + " m";
    floorResult = (heightResult - 3.6) / 2.8 + 1;
    document.getElementById("floorResult").textContent = floorResult.toFixed(0);
  } else {
    document.getElementById("heightResult").textContent = "Please try again";
    document.getElementById("floorResult").textContent = "Please try again";
  }
}

function homicideprediction() {
  var distance = document.Form.distance.value;
  var floor = document.Form.floor.value;

  if (distance > 0 && floor > 0) {
    height = 2.8 * (floor - 1) + 3.6;
    initial_vel = distance / Math.sqrt((2 * height) / gravity);

    if (eval(initial_vel) > 2.7) {
      document.getElementById("homicideResult").textContent =
        "Probability of Homicide is HIGH";
    } else if (eval(initial_vel) > 1.3) {
      document.getElementById("homicideResult").textContent =
        "Probability of Homicide is MEDIUM";
    } else if (eval(initial_vel) > 0) {
      document.getElementById("homicideResult").textContent =
        "Probability of Homicide is LOW";
    } else {
      document.getElementById("homicideResult").textContent =
        "Please try again";
    }
  } else {
    document.getElementById("homicideResult").textContent = "Please try again";
  }
}
