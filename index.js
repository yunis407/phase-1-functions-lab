// Code your solution in this file!
function distanceFromHqInBlocks(p) {
    const h = 42;
    const distance = Math.abs(p - h);
    return distance;

  }
  distanceFromHqInBlocks(50);

  function distanceFromHqInFeet(x){
  function distanceFromHqInBlocks(x){
      const h = 42;
      const f = 264;
    return (Math.abs((x-h)*f));
  }
  return distanceFromHqInBlocks(x);
  }

function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(((destination - start)*264));
  return distance;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination){
  const distance = Math.abs(((destination - start)*264));
  if (distance <= 400){return 0}
else
  if (distance < 2000 && distance > 400) {return ((distance-400)*0.02)}
else
  if(distance >=2000 && distance < 2500){return 25}
else
  if(distance > 2500){return 'cannot travel that far'}
}
calculatesFarePrice();