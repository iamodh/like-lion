# Git

## 1. Git Update

```git
git update-for-windows
```

최신 버전으로 git을 업데이트한다.

# CLI

Command Line Interface

명령어를 통해 컴퓨터와 대화하는 환경으로 마우스를 이용하는 GUI와 비교된다.

## 1. CLI의 장점

- 다중 폴더 생성등의 명령어를 GUI보다 빠르게 작업할 수 있다.

- ws, sa간 파일 이동과 브랜치 작업 등을 정교하게 할 수 있다.

- 키보드만으로 코딩이 가능하다.

# 2. 기본 명령어

`whoami` : 유저 이름을 확인한다.

`code .` : 현재 디렉토리를 vscode로 연다.

`open .` : 현재 디렉토리를 탐색기로 연다.

`touch index.html` : 현재 위치에 `index.html` 파일을 생성한다.

`ls -al` : 숨김 파일 (`.`로 시작하는 파일)까지 모두 (`-a`) 리스트로 (`-l`) 표시한다.

`history` : 지금까지 입력했던 CLI 명령어를 조회한다.

## 3. 심화 명령어

```git
mkdir school1 school2
```

디렉토리를 두 개 생성한다.

```git
echo 'let me = "Frontend Developer"' > js/index.js
```

특정 코드를 추가한 `js/index.js`를 생성한다.

```git
cat js/index.js
```

`js/index.js`를 실행한다.

```git
echo '<!DOCTYPE html>' > index.html
echo '<html>' >> index.html
```

`index.html`을 생성하고 특정 코드를 추가한다.

```git
mv index.html main.html
```

`index.html`을 `main.html`로 바꾼다.

```git
rm -rf css js main.html
```

여러 디렉토리나 파일을 강제로 삭제한다. (하위 파일도 삭제)

# 버전 관리

버전관리란 소프트웨어 등을 개발할 때 어떤 내용을 어떤 시점에 누가 변경했는지에 대한 **변경점**을 관리하는 것을 의미한다.

## 1. Git 기본 명령어

```git
git add index.html
```

: `index.html`을 **working directory**에서 **stage area**로 이동시킨다.

```git
git restore index.html
```

: 워킹디렉토리에 있는 `index.html`의 변경 사항을 원복한다.

```git
git restore --staged index.html
```

: **stage area**에 있는 변경 사항을 **working directory**로 복원한다.

```git
git rm --cached index.html
```

**untracked**(commit에 의해 버전이 생성되지 않은 파일) 파일은 rm을 이용해 unstage한다.

> stage area에 있는 변경 사항에 working directory의 내용을 다시 추가한 후 commit을 이용해 버전을 완성시켜야 할 때 restore 명령어를 사용한다.
>
> **unstage 시 --staged 옵션 주의**  
> working directory에서 restore된 변경 사항은 복원할 수 없다.

```git
git checkout HEAD~3
```

## 2. 브랜치 관련 명령어

main 브랜치에서 HEAD로부터 3개 떨어진 커밋의 id(hash code)로 임시 브랜치를 생성하여 이동하여 내용을 확인한다.

HEAD~3 대신 커밋 id를 입력해도 된다.

```git
git switch -c styling
```

임시 브랜치에서 새로운 브랜치로 이동할 수 있다.

```git
git checkout main
```

main 브랜치로 다시 돌아온다.
