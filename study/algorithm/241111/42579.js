function solution(genres, plays) {
  const arr = [];
  for (let i = 0; i < genres.length; i++) {
    arr.push([i, { genres: genres[i], plays: plays[i] }]);
  }

  // arr로 sort 후 map으로 변환
  arr.sort((a, b) => b[1].plays - a[1].plays);
  const sortedAlbums = new Map();
  for (let a of arr) {
    sortedAlbums.set(a[0], a[1]);
  }

  console.log(sortedAlbums);
  // genres별 plays 합 구하기
  const playsPerGenre = new Map();
  for (let album of sortedAlbums) {
    playsPerGenre.set(
      album[1].genres,
      playsPerGenre.get(album[1].genres)
        ? playsPerGenre.get(album[1].genres) + album[1].plays
        : album[1].plays
    );
  }
  console.log(playsPerGenre);

  // play 수가 가장 많은 장르
  const arr2 = [...playsPerGenre];
  arr2.sort((a, b) => b[1] - a[1]);
  console.log(arr2);

  const ans = [];
  arr2.forEach((a) => {
    count = 0;
    for (let album of sortedAlbums) {
      if (album[1].genres === a[0]) {
        ans.push(album[0]);
        count++;
      }
      if (count === 2) break;
    }
  });

  return ans;
}

solution(
  ["classic", "pop", "classic", "classic", "pop", "jazz", "jazz", "classic"],
  [500, 600, 150, 800, 2500, 1000, 500, 1000]
);
