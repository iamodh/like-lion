function solution(array, commands) {
  const ans = [];
  commands.forEach((command) => {
    const newArray = array.slice(command[0] - 1, command[1]);
    console.log(newArray);
    newArray.sort((a, b) => a - b);
    ans.push(newArray[command[2] - 1]);
  });
  return ans;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
