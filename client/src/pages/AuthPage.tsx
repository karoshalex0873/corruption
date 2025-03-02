import useAuthPage from "../hooks/useAuthPage";
import Login from "./auth/Login";
import Register from "./auth/Register";

const AuthPage: React.FC = () => {
  const { isLogin, toggleAuth } = useAuthPage();

  return (
    <>
      {isLogin ? <Login toggleAuth={toggleAuth} /> : <Register toggleAuth={toggleAuth} />}
    </>
  );
};

export default AuthPage;
