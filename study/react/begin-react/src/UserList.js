import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  // function User({ user, onRemove, onToggle }) {
  // 왜 최초 실행 시 마운트 -> 언마운트 -> 마운트 순서로 로그가 찍히는가? -> strictMode 때문
  // onRemove에서는 컴포넌트가 언마운트되는가?
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  // useEffect(() => {
  //   console.log("user 값이 설정됨");
  //   console.log(user);

  //   return () => {
  //     console.log("user가 바뀌기 전..");
  //     console.log(user);
  //   };
  // }, [user]);

  // useEffect(() => {
  //   console.log(user);
  // });

  console.log("User 컴넌트 렌더링");

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
  // }
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

// export default UserList;
export default React.memo(UserList);
