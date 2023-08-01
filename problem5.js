function crossRoad(signal) {
  switch (signal) {
    case "Red":
      console.log("danger");
      break;
    case "yellow":
      console.log("Wait");
      break;
    case "green":
      console.log("cross");
      break;
  }
}

crossRoad("Red");
