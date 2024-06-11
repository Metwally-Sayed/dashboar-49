import React from "react";
import LoginForm from "./components/loginForm";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <LoginForm />
    </div>
  );
};

export default Login;
