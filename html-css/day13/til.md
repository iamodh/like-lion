# Flex box

## 1. flex item의 속성

- `flex-basis`
- `flex-grow`
- `flex shrink`

위 속성들의 단축속성은 `flex: 1`의 단축속성으로 나타낼 수 있다.

`flex: 1`은 다음을 의미한다.

```css
.flex-item {
  /* flex: 1 */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

- `align-self`: 지정된 아이템의 정렬 방식을 `align-items`처럼 바꾼다.

- `flex-direction: column`: main axis를 세로로 변경

  : `flex-basis`, `min-width`와 관련된 이론들이 마찬가지로 `flex-basis`, `min-height`로 적용된다.

> 세로 정렬을 위해 무조건 flex-direction: column을 사용하는 것은 적절하지 않다. 내부 요소들이 block과 같은 level 대신에 flex item의 특징을 갖기 때문이다.

## 2. 레아이웃 설계

### 안정적인 레이아웃을 위한 flex 속성

![image-1](https://github.com/user-attachments/assets/4102e8f6-96a8-47f9-8adf-7f3d75f94a3f)

- `img` 요소에 `flex-shrink`: 0
- `align-items: flex-start`
- 오른쪽 아이템에 `flex-basis: 0`, `min-width: 0`등

### 특정 위치의 flex item 순서 바꾸기

```css
.flex-item:nth-item(even) {
  flex-direction: row-reverse;
}
```

### flex item 내부 요소의 높이 통일

flex item의 높이가 `stretch`되기 때문에 컨텐츠와 높이 차이가 생겨 정렬이 안 된것 처럼 보인다.

```css
/* 카드가 부모의 높이를 가득 채운다 */
.card {
  height: 100%;
  display: flex;

  flex-direction: column;
}

/* 가운데 컨텐츠가 가용공간을 높이로 사용한다. */
.card-contents {
  grow: 1;
}
```

![스크린샷 2024-08-12 113312](https://github.com/user-attachments/assets/f388ca11-eeb3-45bf-b385-ff329a015210)

# CSS 변수

같은 요소들 사이에서 다른 테마(배경색, 전경색 등)을 사용하고 싶을 때 변수를 이용할 수 있다.

```css
/* 전역 변수 (메인 테마)*/
:root {
  --point-color: black;
}

/* 선택자를 사용하여 변수 재정의 */
.card.type_orange {
  --point-color: orange;
}

.card.type_green {
  --point-color: green;
}

.header-inside h1 {
  color: var(--point-color);
}
```
