function distanceFromHqInBlocks(someValue) {
    return Math.abs (someValue - 42);
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
//   Calculates the distance between start and destination in feet.
function distanceTravelledInFeet(start,destination) {
    return Math.abs(destination - start) * 264;
}
// Function to calculate fare price based on traveled distance.
function calculatesFarePrice(start,destination) {
    const distance = distanceTravelledInFeet(start,destination);
    if(distance <= 400) {
        return 0;
    } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if(distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }

    
}
