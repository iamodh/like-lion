import { useNavigate } from "react-router-dom";

function TodoEdit() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Edit</h2>
      <form>
        <input type="text" /> <br />
        <textarea cols={24} rows={6} />
        <button type="submit">수정하기</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          취소하기
        </button>
      </form>
    </>
  );
}

export default TodoEdit;
