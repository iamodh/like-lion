import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function TodoAdd() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const axios = useAxiosInstance();
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      await axios.post("/todolist", formData);
      navigate("/list");
    } catch (err) {
      console.log(err);
      alert("할일 추가에 실패했습니다.");
    }
    alert("할일 추가가 완료되었습니다.");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <input type="text" placeholder="내용" {...register("content")} />
        <button type="submit">추가</button>
      </form>
    </>
  );
}

export default TodoAdd;
