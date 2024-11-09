function solution2(phone_book) {
  const map = new Map();

  //
  for (let phone of phone_book) {
    // 새로 들어온 phone이 map에 저장된 key들의 접두사인지,
    // 또는 모든 key들이 phone의 접두사인지 체크
    for (let key of map.keys()) {
      if (phone.startsWith(key)) {
        return false;
      }
      if (key.startsWith(phone)) {
        return false;
      }
    }
    // phone을 map에 key로 추가
    map.set(phone, 0);
  }
  return true;
}

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}
