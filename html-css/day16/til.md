# 페이지 내에서 이동

`a`태그의 `href` 어트리뷰트 값에 `#about` 등 해시 값을 주면 문서 안에서 `id`가 `about`인 요소를 찾아 연결한다.

다음과 같이 스크롤 이동에 애니메이션 효과를 추가해 볼 수 있다.

```css
:root {
  scroll-behavior: smooth;
}
```

# sticky

```css
.container-sidebar {
  width: 200px;
  position: sticky;
  top: 0;
  left: 0;
}
```

sticky가 작동하기 위해선 요소 아래 여유 공간이 있어야 한다.

예를 들어 flex container 내에서 사용할 때 컨테이너에 `align-items: flex-start` 설정이 필요하다.

# 과제 리뷰 (인크레더블)

## 1. 레이아웃을 담당하는 클래스 네이밍

l_wrapper와 wrapper의 차이

l은 공공재, 여러번 사용되는 레이아웃 컴포넌트에 붙인다.

## 2. wrapper의 기본 구조

```css
.wrapper {
  margin: 60px auto;
  width: auto;
  max-width: 1200px;
}
```

## 3. aspect-ratio

이미지가 로딩되기 전에도 레이아웃의 위치가 유지되도록 하기 위해 설정해준다.

원본 이미지랑 같다면 이미지에 width: 100%, height: 100%를 주어도 비율이 어그러지지 않는다.

계획된 비율과 다른 이미지가 들어온다면 이미지 컨테이너에 맞지 않겠지만,

이때 obejct-fit을 통해 일부분을 잘라 강제로 비율에 맞출 수 있다.

## 4. 필터 씌우기 (그라디언트)

mask-image 속성을 사용해 마스킹 이미지를 불러온다.

그라디언트 값에 CSS 변수를 사용하는 방법

```css
:root {
  --color-gray-90: 17 17 17;
}

.wow {
  bacground-color: rgb(var(--color-gray-90) / 0.5);
}
```

## 5. flex item에서 width와 min-width

플렉스 컨테이너를 메인, 사이드바 영역으로 나눌 때

메인에 `flex-grow: 1`, 사이드바에 `min-width: 240px`를 주어

메인의 컨텐츠가 늘어나도 사이드바 영역을 침범하지 않게 할 수 있다.

이 때 `width:240px`는 `flex-basis: 240px`와 `min-width: 240px`의 개념을 포함하고 있기 때문에

사이드바에 `min-width` 대신 `width`를 주면 안 줄어들지 않을까 생각했다.

하지만 `width`에 의해 정해진 `min-width`값은 고정되어있지 않고

메인에 의해 영역이 침범될때마다 재계산되기 때문에

사이드바의 너비는 고정되지 않는다.

# Incredible

## 1. 커버

커버에 `aspect-ratio`로 이미지가 들어갈 영역을 만들고 `width: 100%`, `height: 100%`, `object-fit: cover`로 이미지를 넣는다.

## 2. 메인

컨텐츠와 사이드바를 플렉스를 이용하여 분리한 후 가변구역과 고정구역을 설정한다.

컨텐츠에 `flex-wrap`과 `width:basis`에 `300px`과 같이 적당한 값을 주어 페이지 너비가 줄어들었을 때 사이드바가 밑으로 내려오도록 설계한다.

메인 영역이 커버 위로 올라오게 하기 위해 커버에 퍼센트 값의 네거티브 마진을, 메인은 `position: relative`를 주고 서로의 `z-index`를 조정한다.

![image](https://github.com/user-attachments/assets/5ace676f-8d9d-4d2a-b1a7-78ecd1eefd21)

## 2-1. 컨텐츠

글의 여러 문단을 위한 마크업은 여러 개의 p를 사용한다.

그리고 `line-height`를 설정, `margin-bottom` 값을 `1.6em`으로 주어 글 높이 맞는 여백을 준다.

`:root`에 `word-break: keep-all`, `text-overflow: break-word`를 주어 가독성을 높인다.

![image](https://github.com/user-attachments/assets/121e83e2-facf-45a1-9336-90aa2ca8dd99)

6. 별 만들기: 이미지 스프라이트 기법

HTML 마크업은 컨텐츠를 담는 용도로만 사용한다. (`ul` 밑 `li`에 별을 하나씩 담는 것 처럼 시각적 디자인을 위해 사용하지 않는다.)

하나의 ratings `div`를 만들어 별점 내용을 담고, `backgrond-image`로 스프라이트를 사용한다.

`height`, `width`와 `background-size`를 이용해 빈 별 부분만 잘라 사용한 후 같은 방법으로 그 위를 가상요소로 덮는다.

가상요소를 5개 만든 후 width를 %로 주어 별점의 개수를 조절한다.

```css
.ratings {
  background-image: url(images/happy.png);
  background-size: 240px 96px;
  width: 240px;
  height: 48px;
  overflow: hidden;
}

.ratings::before {
  content: " ";
  display: block;
  width: 0;
  height: 48px;
  background-image: url(images/happy.png);
  background-size: 240px 96px;
  background-position: left bottom;
}

.ratings.score_1::before {
  width: 20%;
}
.ratings.score_2::before {
  width: 40%;
}
.ratings.score_3::before {
  width: 60%;
}
.ratings.score_4::before {
  width: 80%;
}
.ratings.score_5::before {
  width: 100%;
}
```

![image](https://github.com/user-attachments/assets/74c41cb6-a3d2-4045-85e6-47e138d81d00)
