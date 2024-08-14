# Git 브랜치

브랜치는 기능, 이슈별로 따야한다. 병합이 완료되어 수명을 다한 브랜치는 삭제가 필요하다.

## 1. 브랜치 관련 명령어

```git
git checkout HEAD~2
```

현재 HEAD로부터 2단계전 커밋 상태로 들어간다. (임시 브랜치)

```git
git switch -c styling
```

`styling` 브랜치를 생성하고 이동한다.

```git
git merge styling
```

- 현재 브랜치가 main인 상태에서 실행하야 한다.
- styling의 내용을 main으로 병합한다. (3-way merge)

```git
git commit --amend
```

- 가장 최근 커밋 내용을 변경한다.
- 수정 전의 커밋은 숨겨진다.

```git
git reflog
```

모든 커밋 히스토리를 보여준다.

- reset --hard를 이용해 특정 시점을 복구할 수 있다.
- 오래된 커밋 내용을 수정하고 싶다면 rebase를 사용한다.

## 2. Rebase

현재 브랜치의 분기 시작점 base를 재설정하여 다른 브랜치 뒤에 이어 붙인다.

base부터 시작하여 커밋 기록들이 새로운 id와 함께 옮겨진다.

한 커밋에서 충돌이 발생한다면 해결 후 `git rebase --continue`로 다음 커밋을 이동시킨다. (충돌 해결 작업이 많이 필요할 수 있음)

```git
git rebase -i HEAD~2
```

- HEAD의 두 번째 이전 커밋에서 **rebase** 작업을 명령어를 사용한 대화형(interactive mode)으로 실행한다.

- 수정하고 싶은 커밋의 내용의 앞 `pick`을 `r`(reset)로 수정한다.

- 커밋 에딧 메세지 창에서 내용을 수정한다.

두 개 이상의 커밋 내용을 수정해야한다면

```git
git rebase --continue
```

로 다음 커밋 에딧 메시지 창으로 이동할 수 있다.

rebase editor에서 r옵션을 주면 해당 커밋 내용을 수정한 후 이후의 커밋 기록까지 다시 커밋한다. (이전의 커밋들은 대체됨)

---

### rebase merge

1. `main`과 `styling`에서 같은 파일에 다른 수정내용을 커밋함

   ![스크린샷 2024-08-04 184615](https://github.com/user-attachments/assets/cef73c9f-4552-462a-a7ae-15502fc6ab15)

2. `styling` 브랜치에서 `git rebase main` 명령어로 병합, merge editor에서 충돌 resolve

   ![스크린샷 2024-08-04 185504](https://github.com/user-attachments/assets/4be81779-45b5-4d8f-ac33-02f195c63527)

   이전 styling 커밋이 id가 변경된 후 main에 rebase된 것을 볼 수 있다.

3. `main`에서 `styling` 병합, `styling` 브랜치 제거

   ![스크린샷 2024-08-04 185904](https://github.com/user-attachments/assets/6bfc98bd-616a-4634-9249-105b1dee43fb)

   merge시 나타났던 브랜치 분기가 정리된 채 병합되었다.

### 두 커밋 합치기

1. 두 커밋의 부모 커밋으로 이동

2. rebase-todo에서 합칠 커밋에 s를 준다.

3. s를 준 커밋들이 부모 커밋으로 합쳐진다.

# 2. merge의 종류

1. 3-way merge

- 브랜치 작업 후 main으로 돌아와 merge한다.
- 브랜치 파생이 커밋 기록 그래프에 나타난다.

2. rebase merge

- 브랜치에서 작업한다.
- main으로부터 base를 수정하며 변경점을 수정한다. (브랜치에서의 커밋을 main보다 빠른 시점으로 가져온다.)

- base가 많은 경우 충돌을 여러번 수정해야할 수 있다.

- 다시 main으로 돌아와 브랜치를 merge하면 git graph가 깔끔해진다.
