# 과제 피드백

- 가운데 정렬을 담당하는 `wrapper` 안에 기능을 하는 컴포넌트 덩어리 `bucketlist`를 만들어 작업하면 코드의 재사용율이 높아진다.

- Wrapper의 클래스명을 `l_wrapper`로, bucketlist 하위 요소를 `bucketlist-header`, `bucketlist-contents`로 약속할 수 있다.

- CSS 스타일 시트 작성 시 적용 범위를 기준으로 카테고리를 나눠준다.(Reset, Layout, Typography, Styles...)

- 픽셀 퍼펙션과 더불어 유지보수를 위한 디자인(리스트의 내용이 많아져 두 줄이 되었을 때)도 고려해야햔다.

- 가상 선택자 사용 시 달라지는 부분의 CSS 코드만 넣는것이 좋다. (list:hover에 `background-image`만 넣기)

- `lists`의 하위 요소 `li` 클래스 이름 `item` 추천

# 셀렉터 특정성

브라우저는 셀렉터 특정성 점수가 높은 셀렉터의 스타일을 먼저 적용시킨다. (금 > 은 > 동)

특정성 점수가 같다면 밑에 작성된 스타일이 적용된다.

- type selector: 동메달

- class selector: 은메달 (pseudo class)

- id selector: 금메달

### 예시

```css
.wow:hover {
  /* 특정성 점수 (0,2,0)*/
}
```

> 인라인 CSS는 셀럭터보다 우선순위가 높다.

> CSS 값 뒤에 !important를 붙이면 우선순위가 가장 높아진다. (권장되지 않는다.)

> important끼리 만나면 특정성 점수가 더 높은 important가 적용된다.

이 원리가 CSS에서 **Cascading**의 이유이다.

# 실습

# 1. 텍스트 컨텐츠의 줄 바꿈 표시

```css
.contents p {
  white-space: pre;
}
```

선택된 요소 컨텐츠의 모든 서식(들여쓰기, 공백, 줄바꿈)이 화면에 반영되게 한다.

그러나 예상치 못한 결과가 나올 때가 있어서 <br> 사용이 권장된다.

# 2. em

```css
.contents h1 {
  font-size: 40px;
}

.contents h1 span {
  font-size: 0.5em;
}
```
