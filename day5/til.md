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

```git
git rebase -i HEAD~2
```

HEAD에서 두 번째 커밋에서 **rebase**를 interactive mode로 실행한다.

수정하고 싶은 내용의 커밋 앞에 pick 대신 r로 수정한다.

커밋 에딧 메세지 창에서 내용을 수정한다.

두 개 이상의 커밋 내용을 수정해야한다면

```git
git rebase --continue
```

로 다음 커밋 에딧 메시지 창으로 이동할 수 있다.

rebase editor에서 r옵션을 주면 해당 커밋 내용을 수정한 후 이후의 커밋 기록과 까지 다시 커밋한다. (이전의 커밋들은 대체됨)

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
