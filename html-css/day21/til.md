# 접근성 높은 Input 스타일

## 1. 템플릿 만들기

전역 폰트 사이즈 62.5%를 주어 지역 스타일에서 rem 단위를 활용, 이후 사용자에 의해 조절 가능하도록 접근성 향상

input-height, input-fs, input-padding 등 변수 사용하여 다른 사이즈의 input 템플릿을 위한 확장성 높임

```css
/* CSS Variables */
:root {
  --font-ko: "Noto Sans KR", sans-serif;

  /* 전역 변수, 모든 input이 가지고 있는 초기의 스타일링 */
  --input-height: 44px;
  --input-fs: 1.4rem;
  --input-padding: 14px;
}

/* Typography */
:root {
  font-family: var(--font-ko);
  font-size: 62.5%; /* 기본 폰트 16px의 62.5% -> 10px */
}

body {
  /* root의 font-size: 1.4배 */
  font-size: 1.4rem;
}

/* Commons */
/* input[type="text"]를 한번 감싸는 역할, input 자체의 스타일을 커스텀을 하면 다양한 입력 필드 유형을 소화하기 어렵기 때문에 추가. */
.field {
  border: 2px solid #ddd;
  border-radius: 4px;
}

.field.type_small {
  /* 지역 변수 : 전역 변수값을 사용하지 않고 .field.type_small 마크업 내에서 사용되는 지역 변수를 만들어 입력창 커스텀 (좀 작은 버전!) */
  --input-height: 32px;
  --input-fs: 1.1rem;
  --input-padding: 10px;
}
```

## 2. 가상 클래스 has

all:unset으로 모든 스타일을 초기화하였으므로 접근성을 위한 추가적인 CSS가 필요하다.

```css
.field:has(input:focus) {
  border-color: dodgerblue;
}
```

field가 focus된 input을 가지고 있을 때 field도 스타일링 할 수 있다.

```css
.field:focus-within {
  /* ... */
}
```

`focus-within`은 `input`, `textarea` 등 모든 입력 필드가 `focus`되었을 때로 조건을 확장한다.

## 2. input 선택자 활용

```css
.choice-item input:checked + .choice-item-icon img {
  transform: scale(0.8) translateY(0);
}

.choice-item-icon img {
  transition: all 0.4s;
  transform: scale(0.4) translateY(280px); rotate(0);
}
```

## 3 check, radio를 위한 스타일 추가

```css
/* checkbox와 radio button의 공통의클래스 choice */
.choice::before {
  content: " ";
}

/* 체크된 choice 요소에 표시 */
.choice:has(:checked)::before {
  content: "✅";
}
```

`label`, 가상요소 등을 이용해 input 박스를 디자인 후 input 요소를 `absolute`, `point-action: none` 처리하여 마크업이 존재하지만 다른 요소에 영향을 주지 않도록 한다.

`display: none`을 하면 스크린리더기에 읽히지 않는 등 마크업의 의미(semantic)이 줄어든다..

#### 커스텀 된 체크 박스

```css
.choice::before {
  content: " ";
  width: 20px;
  height: 20px;
  boredr: 2px solid #ddd;
  border-radius: 4px;
  background-image: url(images/check.svg);
  background-repeat: no-repeat;
  background-position: center 20px;
  transition: all 0.4s;
}

.choice:has(:checked)::before {
  background-position: center center;
}
```

![image-6](https://github.com/user-attachments/assets/5d3435ce-4658-437c-b1aa-7c74fe2112cc)

#### CSS 코드

```css
/* 실제 존재하지만, 마우스 액션도 x, 차지하고 있는 공간도 x 해서 안정성을 확보 */
input[type="radio"],
input[type="checkbox"] {
  pointer-events: none;
  position: absolute;
}

.choice {
  display: inline-flex;
  gap: 10px;
}

/* 
  checkbox와 radio button은 같은 계열이당. 
  그래서 .choice라는 공통의 클래스를 만들었다! 
*/
.choice::before {
  content: " ";
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center 20px;
  transition: all 0.4s;
}

/* checkbox 일반 상태 */
.choice.type_checkbox::before {
  background-image: url(images/check.svg);
}

/* checkbox 선택된 상태 */
.choice.type_checkbox:has(:checked)::before {
  background-position: center center;
}

/* radio button 일반 상태 */
.choice.type_radio::before {
  border-radius: 50%;
  background-color: var(--color-primary);

  /* 안쪽 그림자! x, y는 0, blur 0, spead 10 => 배경색이 있는데 안보이게 설정! */
  box-shadow: inset 0 0 0 10px white;
}

/* radio button 선택된 상태 */
.choice.type_radio:has(:checked)::before {
  /* 안쪽 그림자! x, y는 0, blur 0, spead 5 */
  box-shadow: inset 0 0 0 5px white;
}
```

# 과제 리뷰

## 1. 덩어리 나누기

두 개의 덩어리가 보이는데 공통의 디자인을 가질 수 있으므로 같은 클래스 템플릿을 준다.

차이점은 중첩 클래스로 관리한다.

```html
<div class="section type-purple">Section1</div>
<div class="section type-white">Section1</div>
```

![image-7](https://github.com/user-attachments/assets/9d3e8953-08bb-4f39-9f55-16525c32c5e7)

## 2. 클래스 네이밍

독립적인 성격으로 재사용이 가능한 요소는 상위 요소와의 네이밍 관계를 끊는 것이 좋다.

**종속적인 요소**

![image-8](https://github.com/user-attachments/assets/99d41036-c8c6-40f1-a46d-d996acf74d8c)

각 요소들은 `section`에 종속된다.

`section-header`, `section-contents` 등으로 네이밍 할 수 있다.

**독립적인 요소**

![image-9](https://github.com/user-attachments/assets/cada7074-f98d-4aad-9dd7-004843d57b08)

`section-contents-panel` 보다 `panel`이,

`section-contents-panel-list` 보다 `list`가 재사용성을 높이면서 코드의 길이도 줄일 수 있다.

> 단, 가로기준의 정렬 등은 레이아웃으로 분리하여 페이지 전체에 적용될 수 있도록 한다.

> 식판 따로, 반찬 따로
