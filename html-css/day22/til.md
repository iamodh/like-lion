# 과제 리뷰

## 0. Typography

폰트 설정을 먼저 해준다.

```css
/* Typography */
:root {
  font-family: "Montserrat", sans-serif;
  font-size: 62.5%; /* 브라우저 기본 폰트 사이즈 설정인 16px의 62.5% => 10px */
}

body {
  font-size: 1.4rem;
}
```

폰트 크기에 `rem` 단위를 사용해 추후 접근성을 높일 수 있도록 설계한다. (`body`의 기본 폰트 사이즈는 `1.4rem`(`14px`)으로 설정한다.)

## 1. section-header

```html
<div class="section-header">
  <div class="title">
    <div class="title-headings">Headings</div>
    <div class="title-description">Description</div>
    <div class="title-controls">Controls</div>
  </div>
</div>
```

**식판(section, title) - 반찬(header, headings, ...) 관계의 레이아웃** 마크업을 사용해 컨텐츠가 유동적으로 들어올 수 있게 하였다.

#### title-headings

![image](https://github.com/user-attachments/assets/33cb8194-c1a1-474c-92f2-6aec42ebfde3)

디자인을 위한 줄 바꿈이므로 `flex-basis: auto`인 상태에서 `br`을 사용해 대응이 쉽게 한다.

## 2. section-contents

```html
<div class="section-contents">
  <ul class="l_gap_row">
    <li class="panel">Panel</li>
    <li class="panel">Panel</li>
    <li class="panel">Panel</li>
  </ul>
</div>
```

```css
.l_gap_row {
  display: grid;
  gap: 30px;
  grid-auto-columns: minmax(0, 1fr);
}
```

`panel`의 배치를 위해 `l_gap_row`의 레이아웃 공공재를 사용하였다.

이후 배치 간격이 넓어지거나 할 때 클래스 중첩을 사용해 추가 속성을 줄 수 있다.

레이아웃 클래스는 배치 목적 외의 스타일링은 넣지 않음을 주의한다.

#### 컴포넌트 구조에 따른 클래스 작명 팁

```md
-cover: 컴포넌트에서 대표격 이미지
-header: 컴포넌트에서 header
-title: 컴포넌트에서 title
-main: 컴포넌트에서 main
-contents: 컴포넌트에서 contents
-description: 컴포넌트에서 description
-footer

-controls
-sidebar
```

## 3. panel-contents

`panel` 전체의 높이가 `panel-cover`가 아닌 `panel-contents`에 의해 결정되어야 한다.

`ul` 요소는 다른 곳에서 사용할 수 있으므로 `list` 클래스로 만든다.

#### 마크업

```html
<div class="section-contents">
  <ul class="l_gap_row">
    <li class="panel">
      <div class="panel-cover">Cover</div>
      <div class="panel-contents">
        <h2 class="panel-title">Take a rest</h2>
        <ul class="list type_square">
          <li>It has survived not only five centuries.</li>
          <li>Why do we use it?</li>
          <li>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has root
          </li>
        </ul>
      </div>
    </li>
  </ul>
  /* ... */
</div>
```

#### CSS

```css
/* Layouts */
/* 공통으로 활용하는 레이아웃 클래스. 가로 기준에서 중앙 정렬만 담당 */

.l_gap_row {
  display: grid;
  row-gap: 30px;
  /* min-width: auto문제를 컨테이너 관점에서 미리 해결 */
  grid-auto-columns: minmax(0, 1fr);
}

/* Commons */
.list {
  /* 점의 width + 점 오른쪽에 margin-right 값을 여유 공간으로 만듦 */
  padding-left: 24px;
}

.list li + li {
  margin-top: 12px;
}
.list li::before {
  content: " ";
  background-color: #c89dff;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 14px;
  /* 점의 width + margin-right만큼 왼쪽으로 이동시키는 효과 */
  margin-left: -24px;
}

.list.type_square li::before {
  border-radius: 0;
}
```

![image-2](https://github.com/user-attachments/assets/87d1d6ba-347b-47c6-afc1-85bd0586d945)

## 4. panel-cover

`panel-contents`의 높이에 맞춰지도록 적절히 스타일링한다.

#### CSS

```css
.panel-cover {
  box-shadow: inset 0 0 20px red;
  /* 고정 너비! */
  width: 280px;
  /* flex-basis: auto -> 280px으로 계산 */
  /* min-width: auto -> 280px으로 계산 */

  /* 💖: absolute된 요소의 컨테이닝 블록 */
  position: relative;

  /* z-index: auto가 아닌 값을 넣어 .panel-cover-bg의 새로운 스태킹 컨텍스트가 되게 함 */
  z-index: 0;
}

.panel-cover-bg {
  /* 💖: 상위 요소중에 position: relative 기준 */
  position: absolute;
  left: 0;
  top: 0;
  /* 컨테이닝 블록 기준으로 무조건 가득 채움 */
  width: 100%;
  height: 100%;

  /* 스태킹 컨텍스트에서 가장 맨 밑에 배치 */
  z-index: -1;

  /* 비율 유지를 위해 넣음 */
  object-fit: cover;
}
```

cover 너비가 고정값이 아닌 반응형으로 줄어들게 하는 방법

```css
.panel-contents {
  /* 가변 너비! */

  /* 내부 콘텐츠 너비와 관계없이 너비 조정 => auto */
  /* 500px 임의의 설정값으로 동작 변경 => 창 크기가 작아졌을때 적절한 시기에 .panel-cover, 280px width값을 flex-shrink: 1에 의해 수축 시킬 수 있음 */
  flex-basis: 500px;

  /* flex-basis:0이므로 flex-grow비율 만으로 너비 조정 */
  flex-grow: 1;
	@@ -223,6 +222,11 @@ body {
  /* min-width: auto가 뭐길래? 내부 콘텐츠 크기로 min-width가 강제됨 */
  min-width: 0;

  /*
    flex-basis, min-width 지정하기 싫다면
    width: 500px; flex-grow: 1도 가능
  */

  padding: 16px 22px 22px;
}
```

![image-3](https://github.com/user-attachments/assets/2ed6ee52-13f5-4369-af53-6f5c50eec342)
