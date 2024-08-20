# grid

## 1. 초기값

```css
.container {
  width: 900px;
  height: 400px;
  display: grid;

  /* 원룸의 위치 */
  justify-content: normal;
  align-content: normal;

  /* frog의 위치 */
  justify-items: normal;
  align-items: normal;

  /* 원룸의 사이즈 */
  grid-auto-columns: auto;
  grid-auto-rows: auto;
}
```

1. `grid-auto-colums`와 `grid-auto-rows`의 초깃값 `auto` 의해 컨테이닝 박스가 1x2로 나누어진다.

2. `content` 속성은 컨테이닝 박스의 정렬을 의미하고, 가로로와 세로로 `normal`(stretch)된다.

3. `items` 속성은 컨테이닝 박스 안에서 아이템을 배치하고, `normal`에 의해 strecth된다.

![image](https://github.com/user-attachments/assets/87d083e1-576d-409e-ad19-e2545508615a)

---

```css
.container {
  /* ... */

  /* 원룸의 크기 */
  grid-auto-columns: 200px;

  /* 원룸의 위치 */
  justify-content: center;

  /* frog의 위치 */
  justify-items: center;
  align-items: center;
}
```

200px의 컨테이닝 블럭이 center로 정렬되고, 그 안에서 아이템이 정렬된다.

![image](https://github.com/user-attachments/assets/13c2bf1e-2837-4014-93bb-cd2c71d95d5c)

## 2. grid-template

### auto

```css
.container {
  width: 900px;
  height: 400px;
  display: grid;

  /* 가로 track 생성 */
  grid-template-columns: auto auto;
  grid-template-row: auto;

  /* 원룸의 위치 */
  justify-content: normal;
  align-content: normal;

  /* frog의 위치 */
  justify-items: end;
  align-items: end;

  /* 원룸의 사이즈 */
  grid-auto-columns: 100px; /* 무시된다 */
  grid-auto-rows: 100px;
}
```

`grid-template-columns`는 track(식판)을 생성한다.

rows는 하나의 track밖에 없으니 다음 줄은 `grid-auto-rows`에 의해 `100px`의 row가 생성된다.

![image](https://github.com/user-attachments/assets/51ac3837-54ad-412d-a6cc-f0a24cd9660e)

---

### 1fr

auto는 내부 컨텐츠에 가용공간을 더해주기 때문에 컨텐츠의 길이에 영향을 받는다.

![image](https://github.com/user-attachments/assets/1dcd7219-5c87-48b3-83d4-e7592a146c98)

이 때 컨텐츠의 길이에 관계없이 같은 비율로 트랙을 나누려면 1fr을 사용하면 된다.

![alt text](image-29.png)

예를 들어 높이가 긴 아이템이 들어올 때 min-height: 0을 주어 1fr의 높이가 변하지 않게 안정적인 레이아웃을 만들 수 있다.

![alt text](image-4.png)

하지만 `1fr`도 컨텐츠가 overflow되면 아이템의 너비도 같이 커진다.

![image](https://github.com/user-attachments/assets/f936d87c-a630-4978-bade-41a1685117aa)

때문에 `min-width`의 값을 `auto`에서 `0`으로 바꿔주어야 한다.

함수를 이용해 `min`값을 `auto`에서 `0`으로, 너비대신 최대너비를 주어 컨텐츠의 영향을 받지 않은 채 페이지의 너비에 유동적으로 동작하는 레이아웃을 만둘 수 있다.

![image](https://github.com/user-attachments/assets/c6f7c7a8-43c4-4881-892a-33a33c0bde1d)

```css
.container {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
}
```

# 예제 1 - 반응형 셀 너비

최외곽 wrapper (`min-height`가 `100vh`)를 grid로 만들어 내부 두 컨테이너를 가운데로 정렬한다.

![image-5](https://github.com/user-attachments/assets/da92e423-c336-41fe-8901-ee30a6d6b897)

![alt text](image-9.png)

```css
.container {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: inset 0 0 20px red;
  display: grid;

  justify-content: center;
  align-content: center;

  grid-template-columns: 244px minmax(0, 830px);
  grid-template-rows: minmax(600px, auto);
}
```

컨테이너의 template 값에 고정 px를 주지 않고 minmax함수를 사용하여 페이지의 너비에 따라 가변되도록 한다. (사이드바는 `244px`로 고정)

높이도 minmax 값을 주어 `600px`에서 컨텐츠에 따라 늘어날 수 있게 한다.

![image-10](https://github.com/user-attachments/assets/dae9695d-f8e4-4ce6-9f21-b1aaa8ec6ca9)

# 예제 2 - 반응형 셀 개수

웹 페이지의 너비에 따라 column의 개수 다르게 하기

```css
.container {
  /* 200px의 너비를 가진 아이템의 개수 변화 */
  grid-template-columns: repeat(auto-fit, 200px);

  /* 최소 200px를 가지고 컨테이너를 꽉 채우게 개수 변화 */
  grid-template-columns: repat(auto-fit, minmax(200px, 1fr));
}
```

# 예제 3 - 셀 병합

![alt text](image-15.png)

## 1. 정사각형 컨테이나 만들기

`aspect-ratio` 값을 `1 / 1`로 준다.

```css
.wrapper {
  max-width: 960px;
  margin: 100px auto;
}

.grid {
  box-shadow: inset 0 0 20px blue;
  aspect-ratio: 1/1;
}
```

## 2. 그리드 아이템 생성 순서 변경

`gird-auto-flow`로 그리드에 아이템이 생성되는 순서를 바꿀 수 있다. 기본값은 `row`다.

```css
.grid {
  box-shadow: inset 0 0 20px blue;
  aspect-ratio: 1/1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  gap: 20px;

  grid-auto-flow: column;
}
```

![image-17](https://github.com/user-attachments/assets/393aa3cb-b871-405a-bca8-71d1826889c5)

## 3. 아이템 위치 변경

아이템에 `grid-column-start`로 시작위치를 정할 수 있다.

아이템들이 마크업 순서를 고려해 채워지기 때문에 그리드 안에 빈 공간을 만들 수 있다.

```css
.kan:first-child {
  grid-column-start: 2;
}
```

![image-19](https://github.com/user-attachments/assets/08b3367a-0e96-4458-a77c-e18216a7bed9)

`grid-column-start`의 값이 주어졌지만, `grid-row-start`의 값이 주어지지 않으면 (`auto`) 알아서 빈 공간을 만든 후 해당 위치(라인)로 아이템을 옮긴다.

뒤의 아이템들은 밀려난다.

```css
.item.active {
  background-color: orangered;
  grid-column-start: 1;
  grid-row-start: auto;
}
```

![image-21](https://github.com/user-attachments/assets/66d65029-1ade-4721-b3df-ebad20509817)

`griw-row-start`가 명시된 경우 `grid-column-start`를 자동으로 `1`로 바꾼다. (빈 공간이 안 생긴다.)

```css
.item.active {
  background-color: orangered;
  grid-column-start: auto;
  grid-row-start: 2;
}
```

`grid-column-start`, `grid-row-stat`의 정확한 값이 주어지면 마크업 순서를 바꾼다.

![image-23](https://github.com/user-attachments/assets/b7f6d43d-9cfa-4f3f-8996-3542e0c39993)

`grid-column-start`가 column 라인을 넘어갈 경우 `grid-auto-columns`의 너비만큼 새로운 column이 추가된다.

```css
.item.active {
  background-color: orangered;
  grid-column-start: 5;
  grid-row-start: auto;
}
```

![image-25](https://github.com/user-attachments/assets/670a5462-9c84-4979-b11a-081f1a2ce264)

다음과 같이 위치 변경을 위한 단축 속성을 사용할 수도 있다.

```css
.item.active {
  background-color: orangered;
  grid-column-start: 1 / 3;
  grid-row-start: 1 / 3;
}
```
