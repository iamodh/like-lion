import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function TodoEdit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { _id } = useParams();
  const { item, refetch } = useOutletContext();

  const axios = useAxiosInstance();

  const onSubmit = (formData) => {
    console.log(formData);
    try {
      axios.patch(`/todolist/${_id}`, {
        title: formData.title,
        content: formData.content,
        done: formData.done,
      });
      alert("수정이 완료되었습니다.");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Edit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} defaultValue={item.title} />{" "}
        <br />
        <textarea
          cols={24}
          rows={6}
          {...register("content")}
          defaultValue={item.content}
        />
        <input
          type="checkbox"
          {...register("done")}
          defaultChecked={item.done}
        />
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
