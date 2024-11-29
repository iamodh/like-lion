// function solution(numbers) {
//   const result = [];
//   function permute(arr, current = []) {
//     // base case
//     // arr의 모든 숫자를 사용 한 경우
//     if (arr.length === 0) {
//       const num = parseInt(current.join(""));
//       result.push(num);
//       return;
//     }

//     // recursive case
//     // arr의 첫 번째 요소부터 newCurrent, remaning을 만들어 permute 실행
//     for (let i = 0; i < arr.length; i++) {
//       const newCurrent = [...current, arr[i]];

//       const remaining = arr.filter((_, index) => index !== i);

//       permute(remaining, newCurrent);
//     }
//   }

//   permute(numbers);
//   result.sort((a, b) => b - a);
//   return result[0];
// }

function solution(numbers) {
  for (let number of numbers) {
    console.log(number.toString()[0]);
  }

  numbers.sort((a, b) => {
    if (a.toString()[0] > b.toString()[0]) return -1;
    else return 1;
  });

  return numbers.join("");
}

solution([6, 10, 2]);
