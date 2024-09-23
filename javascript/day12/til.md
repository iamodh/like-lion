# 노드의 이용

## 1. 스타일 획득 - getComputedStyle()

외부의 스타일 시트가 적용된 태그의 스타일을 획득하려면

노드의 style 속성을 이용할 수 없고, (DOM노드에 attribute 노드가 연결된 inline 방식만 가능)

getComputedStlye()함수를 사용해야 한다.

> 스타일 변경을 위해서는 노드의 style 속성을 수정해주는 방법을 사용한다.

## 2. 노드 추가

innerHTML을 사용해 DOM을 수정하는 방법은 문자열에 대한 파싱이 다시 필요하기 때문에 비효율적이다.

대신 createElement(), appendChild(), insertBefore(), removeChild() 등의 메서드를 사용한다.
