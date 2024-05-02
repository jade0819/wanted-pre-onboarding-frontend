import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserInputs from "../../hooks/auth/useUserInputs";
import { PATH_NAME } from "../../constants/routes";
import Inputs from "../../components/auth/Inputs";

export default function AuthPage() {
  const { pathname } = useLocation();
  const { SIGNIN, SIGNUP, TODOS } = PATH_NAME;
  const isSigninPath = pathname === SIGNIN;

  const { userInputs, isValidCheck, saveUserInputs } = useUserInputs();
  const { email, password } = userInputs;

  const formBtnDisabled = !isValidCheck;

  const { signin, signup } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSigninPath) {
      signin(email, password, navigate);
    } else {
      signup(email, password, navigate);
    }
  };

  const title = isSigninPath ? "로그인" : "회원가입";

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">{title}</div>
      <form className="p-1" onSubmit={handleSubmit}>
        <Inputs email={email} password={password} onChange={saveUserInputs} />
        <div className="flex justify-between items-center">
          <Link to={isSigninPath ? SIGNUP : SIGNIN}>
            {isSigninPath ? "회원가입하기" : "로그인하기"}
          </Link>
          <button
            className="disabled:bg-gray-400"
            type="submit"
            disabled={formBtnDisabled}
            data-testid={isSigninPath ? "signin-button" : "signup-button"}
          >
            {title}
          </button>
        </div>
      </form>
    </div>
  );
}
