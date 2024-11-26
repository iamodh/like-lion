function solution(bridge_length, weight, truck_weights) {
  const waiting = [...truck_weights];
  const bridge = Array(bridge_length).fill(0);
  bridgeWeight = 0;
  let ans = 0;

  while (waiting.length > 0 || bridge.some((el) => el !== 0)) {
    ans++;

    // 다리의 첫 번째 트럭 제거
    bridgeWeight -= bridge.shift();

    // 트럭이 다리에 올라갈 수 있을 때
    if (waiting.length > 0 && bridgeWeight + waiting[0] <= weight) {
      // 트럭틀 다리에 올림
      const truck = waiting.shift();
      bridge.push(truck);
      bridgeWeight += truck;
    } else {
      // 트럭이 다리에 못 올라갈 때
      // 다리 위 트럭을 전진시킴
      bridge.push(0);
    }
  }
  return ans;
}

console.log(solution(100, 100, [10]));

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let onTheBridge = [];
  let bridgeWeight = 0;

  while (truck_weights.length > 0 || bridgeWeight > 0) {
    answer++;

    // 가장 앞의 트럭이 다리를 벗어남
    if (onTheBridge.length > 0 && onTheBridge.length === bridge_length) {
      bridgeWeight -= onTheBridge.shift();
    }
    // 대기중인 트럭이 다리에 올라갈 수 있으면 올림
    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      onTheBridge.push(truck);
      bridgeWeight += truck;
    } else {
      onTheBridge.push(0);
    }
  }
  return answer;
}
