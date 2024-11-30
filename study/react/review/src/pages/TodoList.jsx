import useAxios from "@hooks/useAxios";

function TodoList() {
  const { data, error, isLoading } = useAxios({ url: "/todolist" });
  return (
    <>
      <h1>TodoList</h1>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.items.map((todo) => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
