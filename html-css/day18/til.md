# grid

## 1. 기본 속성

```css
.container {
  width: 900px;
  height: 400px;
  display: grid;
  justify-items: center; /* 원룸 내의 컨텐츠 위치 */
  justify-content: center; /* 원룸 위치 */
  grid-auto-columns: 200px; /* 원룸 가로 크기 */
}
```

![alt text](image.png)

```css
.container {
  width: 900px;
  height: 400px;
  display: grid;

  /* 원룸의 위치 */
  justify-content: normal;
  align-content: center;

  /* frog의 위치 */
  justify-items: normal;
  align-items: normal;

  /* 원룸의 사이즈 */
  grid-auto-columns: auto;
  grid-auto-rows: auto;
}
```

![alt text](image-2.png)

속성들의 초기값 normal, auto는 stretch를 의미한다.
(컨테이닝 블럭 또는 부모 컨테이너를 가득 채움)

```css
.container {
  width: 900px;
  height: 400px;
  display: grid;

  grid-template-columns: auto auto;

  /* 원룸의 위치 */
  justify-content: normal;
  align-content: center;

  /* frog의 위치 */
  justify-items: normal;
  align-items: normal;

  /* 원룸의 사이즈 */
  grid-auto-columns: 100px; /* 무시된다 */
  grid-auto-rows: auto;
}
```

grid-template-columns는 track을 생성한다.

![alt text](image-3.png)
