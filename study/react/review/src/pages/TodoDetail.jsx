import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function TodoDetail() {
  const { _id } = useParams();
  const axios = useAxiosInstance();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchDetail = async () => {
    const res = await axios.get(`/todolist/${_id}`);
    setData(res.data);
  };
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <>
      <h2>Detail </h2>
      {data && (
        <div>
          <div>제목: {data.item.title}</div>
          <div>내용: {data.item.content}</div>
          <div>done: {data.item.done + ""}</div>
          <Link to="edit">수정하기</Link>
          <button
            type="button"
            onClick={() => {
              navigate("/list");
            }}
          >
            목록
          </button>
          <Outlet context={{ item: data.item, refetch: fetchDetail }} />
        </div>
      )}
    </>
  );
}

export default TodoDetail;
