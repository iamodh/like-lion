# script의 전역 변수로 id 어트리뷰트를 사용

HTML 요소에 id 어트리뷰트를 부여하면 동일한 이름의 전역 변수가 **암묵적으로 선언되고** 해당 노드 객체가 할당되는 부수 효과가 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="foo"></div>
    <script>
      console.log(foo);
    </script>
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/6b7d35c8-6cf4-465d-872c-fcf3870e0406)

위와같이 전역변수를 사용하여 노드 객체에 접근할 수 있지만, getElementById 메서드를 사용하여 접근하는 것이 다음의 이유로 권장된다.

- 네임스페이스 오염

- 성능

- 명시성과 가독성

- 유지 보수성
