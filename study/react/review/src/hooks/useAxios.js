import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://todo-api.fesp.shop/api";
axios.defaults.timeout = 1500;

function useAxios(fetchParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request(fetchParams);
  }, []);

  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await axios.get(params.url);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError({
        message:
          "일시적인 오류로 작업 처리에 실패했습니다. 잠시후 다시 시도해주세요.",
      });
      setData(null);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
}

export default useAxios;
