# 8/7 프론트엔드를 위한 피그마

## 1. 단축키

- 대부분의 명령어는 Actions 검색을 활용하자: `ctrl + k`

- 도구 창 최소화: `shift + \`

- 모든 UI 최소화: `ctrl + \`

## 2. 도형 그리기

![스크린샷 2024-08-07 113900](https://github.com/user-attachments/assets/4900369f-5349-4361-a431-ba8a20174baf)

이미지를 레이어에 붙여넣은 후 투명도를 낮추어 가이드를 만든다.

- Ruler를 이용해 가이드라인을 생성한다.

- 원의 arc, sweep과 같은 속성을 조절하여 모양을 조절한다.

- Pen, Line과 outline stroke를 이용해 선을 만든다.

> 이렇게 속성을 이용해 만든 도형은 사이즈 조절시에도 비율이 유지된다.

도형을 완성한 후 전체를 드래그하여 Union으로 합친다.

- Flatten selection을 선택하면 구성요소를 볼 수 없다.

## 3. 이미지 마스킹

- 텍스트나 도형에 맞게 이미지 크기를 조정한다.

- 레이어에서 텍스트를 이미지 밑에 놓는다.

- 이미지와 텍스트를 선택한 후 `Use as mask`를 선택한다.

## 4. 텍스트 워크

- 텍스트 디자인에 리듬, 음율을 추가한다.

- filter, gradiant 등을 이용해 텍스트를 배치할 곳을 만든다.

- 복사본을 만들어 테스트한 후 최종 디자인을 결정한다.

## 5. 컬러 픽

- Primary, Secondary, Accent의 Box에 picker로 이미지로 알맞은 색을 추출해 `Color Chips`를 완성한다.

> 그룹화(`ctrl + g`)등을 통해 레이어를 클린하게 유지해야한다.

## 6. 정렬

- 드래그를 position에서 알맞은 도구를 찾아 정렬한다.

- `shift`를 누르면 그룹을 상위 오브젝트 기준으로 정렬할 수 있다.

## 7. 레이어

- 그룹: Auto Layout을 사용할 수 없다.

- **프레임**: Auto Layout을 사용할 수 있다 (`shift + a`). 대분의 UI 구현에 사용된다.

  - Auto Layout: CSS의 플렉스박스의 기능을 사용할 수 있다. (`flex-direction`, `flex-wrap`)
  - 리스트가 Auto Layout이라면 아이템 간의 순서도 편하게 바꿀 수 있다.
  - 내용의 크기에 따라 박스 사이즈가 바뀐다.

- 섹션: 프레임을 묶어야 할 때 사용한다. 섹션에 이름을 줄 수 있고, `fill color`를 설정할 수 있다.

## 8. 컨스트레인트

- position에서 선택할 수 있다.

- 뷰포트의 사이즈에 관계없이 컴포넌트가 특정 위치에 고정되도록 한다.

- 이미지는 scale 옵션보다 left and right, top and bottom을 사용한다.

## 9. 레이아웃 그리드

- 정돈된 컨텐츠 배치를 위하여 그리드를 사용한다.

- column을 추가하고 margin, gutter 등을 설정한다.

> 이미지 복사 방법: fill 안의 이미지 요소를 복사해서 컨텐츠 안에 붙여넣는다. 원래 있던 요소는 제거한다.

## 10. 컴포넌트

- 특정 컨텐츠의 색상 등이 수정되었을 떄 한 번에 관리하기 위해 컴포넌트를 생성한다.

- 복제된 요소에서는 수정이 불가능하다.

- text와 같은 속성을 추가하여 복제 시 다른 컨텐츠의 요소를 사용할 수 있다.

- show outline에서 보라색으로 표시된다.

- 우측 Frame 탭에있는 컴포넌트 아이콘을 클릭해서 만든다(`ctrl+k`).

- 사본은 왼쪽 components 탭에 등록되어 꺼내 쓰면 된다.
