function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = {
    bridgeLength: bridge_length,
    bridgeWeight: weight,
    truckWeight: 0
  };
  const waitTrucks = truck_weights.map((weight) => ({
    weight,
    passedTick: -1
  }));
  let tick = 0;

  let runTrucks = [];

  while (waitTrucks.length > 0 && runTrucks.length > 0) {
    tick += 1;

    // remove passed trucks
    runTrucks = runTrucks.filter((truck) => {
      if (truck.passedTick === tick) return false;
      if (truck.passedTick < 0) {
        console.log("트럭의 tick이 제대로 설정되지 않았습니다.");
      }
      return true;
    });

    const truck = waitTrucks.shift();

    const isOver = bridge.truckWeight + truck.weight > bridge.bridgeWeight;
    if (isOver) continue;
    const passedTick = tick + bridge.bridgeLength;
    runTrucks = [...runTrucks, { ...truck, passedTick }];
  }

  console.log(tick);
  answer = tick;
  return answer;
}
