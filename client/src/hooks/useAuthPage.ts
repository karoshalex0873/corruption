import { useState } from "react";

const useAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  return { isLogin, toggleAuth };
};

export default useAuthPage;
