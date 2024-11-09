// function solution(participant, completion) {
//   const comp = new Map();
//   completion.forEach((person, i) => comp.set(person, i));
//   for (let person of participant)
//     if (comp.get(person)) {
//       comp.delete(person);
//     }
// }

// console.log(
//   solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
// );

function solution(participant, completion) {
  const comp = new Map();
  for (let person of participant) {
    comp.set(person, (comp.get(person) || 0) + 1);
  }

  for (let person of completion) {
    comp.set(person, comp.get(person) - 1);

    if (comp.get(person) === 0) comp.delete(person);
  }

  return [...comp.keys()][0];
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
