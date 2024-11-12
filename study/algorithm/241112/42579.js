function solution(genres, plays) {
  // 정렬을 위해 배열에 저장
  // [0, {genres: 'classic', plays: 500 } ]
  const albums = [];
  for (let i = 0; i < genres.length; i++) {
    albums.push([i, { genres: genres[i], plays: plays[i] }]);
  }

  // albums를 plays 순으로 정렬
  albums.sort((a, b) => b[1].plays - a[1].plays);

  // console.log(albums);

  // genres별 plays 합 구하기
  // genres를 key로, plays를 value로 set
  // map에 이미 존재하는 genres면 values에 plays를 더해서 set
  // "pop" => "3500"
  const playsMap = new Map();
  albums.forEach((album) => {
    playsMap.set(
      album[1].genres,
      playsMap.get(album[1].genres)
        ? playsMap.get(album[1].genres) + album[1].plays
        : album[1].plays
    );
  });

  // console.log(playsMap);

  // playsMap 정렬
  const playsArr = [...playsMap];
  playsArr.sort((a, b) => b[1] - a[1]);
  // console.log(playsArr);

  const ans = [];
  // 장르 별 2개만 꺼내어 ans에 push
  playsArr.forEach((a) => {
    count = 0;
    for (let album of albums) {
      if (album[1].genres === a[0]) {
        ans.push(album[0]);
        count++;
      }
      if (count === 2) break;
    }
  });

  // console.log(ans);

  return ans;
}

solution(
  ["classic", "pop", "classic", "classic", "pop", "jazz", "jazz", "classic"],
  [500, 600, 150, 800, 2500, 1000, 500, 1000]
);
