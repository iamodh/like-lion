# form 요소

## 1. 초기화

`form` 요소(`button`, `input` 등)는 브라우저마다 다르게 표시되기 때문에 **초기화**가 필요하다.

`all: unset` 후 `display: block`과 같이 필요한 속성을 지정한다.

그럼에도 form 요소를 사용하는 이유는 특정한 기능을 가지고 있기 때문이다.

`button`, `input` 등은 레이아웃을 위해 만들어진 `div`와 목적이 다르다.

`div`로 만들 수 있지만 키보드 버튼 인식, 폼 제출 등 필요한 기능을 직접 구현해야한다.

기본 기능은 가져오돼 `unset` 후 수정하여 브라우저마다 표시되는 스타일, 또는 폼 요소끼리의 디자인을 **평준화** 해준다.

## 2. 코드

### 초기화

```css
fieldset,
legend {
  /* 모든 속성을 선택한다. 그리고 unset */
  all: unset;
  /* 모든 속성이 초기화되면 위험하다. 기본 스타일이 유지되면 좋은 경우도 있으니. -> 사용자 에이전트에 여전히 관심을 가져야 한다. */
  display: block;
}
```

### 평준화

공공재로 사용되는 `form` 요소에 대한 평준화

```css
/* input과 select등은 공공 UI다. 반복해서 쓰이는게 기본값 */
/* 그래서 초기화부터 진행 -> 바로 뒤이어 디자인 평준화를 진행 */
input,
select {
  all: unset;
}

/* 디자인 평준화, 해당 공공 UI를 평준화하자!(브라우저종류 관계 없이!) */
select,
input[type="text"] {
  /* block이 되더라도 */
  display: block;
  /* width: auto가 컨테이닝 블록 기준으로 가득차지 않는다. */
  width: 100%; /* 억지로 100% 때려 줘야 함! */

  /* 38픽셀은 표준이 아님. 흑염소 마음 */
  height: 38px;
  line-height: 38px;

  /* 텍스트의 안정적인 표현을 위해 좌우 padding */
  padding: 0 10px;
  /* width: 100%에 padding이 플러스 알파 됨 -> 고것을 막겠당. */
  box-sizing: border-box;

  box-shadow: inset 0 0 10px red;
}
```

### 마크업

```html
<!DOCTYPE html>
<html>
  <head>
    <title>회의실 예약</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <h1>회의실 예약</h1>
      <form action="데이터를서버쪽에보낸당">
        <fieldset>
          <legend>일반 정보</legend>
          <div>
            <label for="">어떤 용도로 이용할 예정이신가요?</label>
            <select name="subject">
              <option value="0">디자이너와의 티타임</option>
              <option value="1">개발자와의 코드 리뷰</option>
              <option value="2" selected>사장님과 연봉 협상</option>
            </select>
          </div>

          <div style="display: none;">
            <label>회의의 규모는 어떠한가요?</label>
            <label><input type="radio" name="size" />2~8인</label>
            <label><input type="radio" name="size" />9~20인</label>
            <label
              ><input
                type="radio"
                name="size"
                checked
                disabled
              />21~100인</label
            >
          </div>

          <div style="display: none;">
            <label>어떤 장비가 필요 하신가요?</label>
            <label><input type="checkbox" checked />빔 프로젝터</label>
            <label><input type="checkbox" />화이트보드</label>
            <label><input type="checkbox" />전동데스크</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>개인 정보</legend>
          <div>
            <label for="name">예약자의 성함을 알려 주세요.</label>
            <input
              name="username"
              id="name"
              type="text"
              value="이종찬"
              readonly
              placeholder="성함 입력"
            />
          </div>

          <div>
            <label for="name">날짜를 입력 해주세요.</label>
            <input name="date" id="name" type="date" />
          </div>

          <div style="display: none;">
            <label for="topic">회의의 주제를 남겨 주세요.</label>
            <textarea id="topic" placeholder="주제에 대한 짧은 요약"></textarea>
          </div>
        </fieldset>

        <button type="submit">예약하기</button>
      </form>
    </div>
  </body>
</html>
```

### 페이지

![image](https://github.com/user-attachments/assets/9fc49cc0-f800-41d1-9a77-35dd3c3fe759)
