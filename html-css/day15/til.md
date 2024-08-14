# absolute

`position:absolute`는 요소가 가지고 있는 공간을 제거하고, `position: static`을 제외한 상위 요소로 컨테이닝 블럭의 **가용공간**을 바꾸기 위해 사용된다.

`static`이 아닌 상위요소가 없을 경우 **뷰포트**(현재 전체 화면)를 가용공간으로 사용한다.

> absolute 선언 후 left: 0, top: 0 등의 초기화를 반드시 해줘야한다. (아니면 이상한 곳에 위치된다.)

## 1. 조건

`left: 0`, `right: 0`, `top: 0`, `bottom: 0`을 주면 `static`이 아닌 상위 요소에 stretch된다.

이 상태에서 `absolute` 요소에 고정 너비와 높이를 주면 남은 공간을 가용공간으로 사용할 수 있게 된다.

`left`, `right`, `top`, `bottom` 대신 단축속성 `inset`을 이용할 수 있으며,

생성된 가용공간을 `margin: auto`만으로 상, 하 가운데 정렬이 가능하다.

이를 이용해 다음과 같이 `hover`시 상위 박스를 벗어나 확장되는 애니메이션 효과를 만들 수 있다.

```css
.pos:hover {
  margin: -40px;
}
.pos {
  transition: all 0.4s;
  background-color: orange;
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0.5;
}
```

<img width="300px" src="https://github.com/user-attachments/assets/de49c72a-7e8a-4d5f-8e2d-680622f91155">

## 2. 활용: 말풍선 만들기

h2의 가상요소에 네거티브 마진, `border-color`을 이용한 삼각형을 만든 후 `absolute`로 배치하여 말풍선 을 만들 수 있다.

```css
h2::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  height: 0;
  margin: auto -50px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent transparent white;
}
```

![image-5](https://github.com/user-attachments/assets/a7794877-ddf3-4fec-af4c-c5654121e862)

또한 가상요소를 absolute 처리 후 inset: 0으로 컨테이닝 블록을 가용공간으로 만들고, 너비를 준 후 가운데 정렬하여 선을 만들었다.

# z-index

`z-index`는 `static`이 아닌 요소(주로 `relative`)에 사용할 수 있으며, **stacking context내에서** 요소의 앞 뒤 순서를 결정하는 속성이다.

기본적으로 `relative`를 가진 요소는 앞으로 튀어나온다.

끼리 만났을 때 z-index가 높은 요소가 앞에 나온다. (음수값도 가능하다.)

## 1. Stacking Context

z-index의 기준점이 되는 공간이다.

원래 한 요소가 `z-index: -1`을 가지고 있으면 `html` 뒤로 간다. (맨 뒤로 가서 안 보임)

하지만 이 요소의 상위요소가 스태킹 컨텍스트인 경우,이 컨테이너를 기준으로 하위 요소들의 `z-index`가 비교된다.

스태킹 컨텍스트를 만드는 다양한 방법이 있지만 `z-index: 0`을 주는 것이 가장 의도가 분명하다.

![image-9](https://github.com/user-attachments/assets/efb1b2bd-2f72-4e06-9815-81ddbe71854e)

위 경우 `z-index: 1`이 `z-index:9999`를 가지고 있는 요소보다 앞에 나온다.

왜냐하면 `z-index:9999`를 가지고 있는 요소는 `z-index: 0`인 스태킹 컨텍스트를 가지고 있는 부모를 가지고 있고,

이 부모의 모든 하위 요소는 `z-index:1`을 가지고 있는 형제보다 뒤에 위치되기 때문이다.

## 2. 활용: 헤더에 배경 추가하기

```css
.cover {
  aspect-ratio: 24 / 9;
  position: relaitve;
  z-index: 0;
  overflow: hidden;
}

.cover img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

![image-8](https://github.com/user-attachments/assets/46aeeea6-09c9-476e-8e5a-db07cf07b444)

- `aspect-ratio`로 이미지가 들어갈 공간을 지정해 놓는다.

- `h1` 대신 `img`에 `absolute`를 주어 `cover` 안의 레이아웃 배치가 자유롭도록 한다.

  : 이후 `cover를` flex container로 만들어 다양한 속성을 이용해 아이템을 배치할 수 있다.

- `img`에 `width: 100%`, `height: 100%`, `object-fit: cover`를 주어 부모 `cover`의 공간에 알맞은 비율로 들어간다.

> div에 background 속성을 사용하는 것과 동일하게 적용된다. (video에도 사용 가능)
