import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  // const { data, error, isLoading } = useAxios({ url: "/todolist" });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const axios = useAxiosInstance();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/todolist");
      setData(res.data);
      setError(null);
    } catch (error) {
      setError({
        message:
          "일시적인 오류로 작업 처리에 실패했습니다. 잠시후 다시 시도해주세요.",
      });
      setData(null);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async (_id) => {
    try {
      await axios.delete(`/todolist/${_id}`);
      alert("삭제가 완료되었습니다.");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>TodoList</h1>
      <Link to="/add">추가하기</Link>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.items.map((todo) => (
            <li key={todo._id}>
              <div>
                <Link to={`${todo._id}`}>
                  <span>{todo._id}</span>
                  <span>{todo.title}</span>
                </Link>
                <button type="button" onClick={() => onDelete(todo._id)}>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
