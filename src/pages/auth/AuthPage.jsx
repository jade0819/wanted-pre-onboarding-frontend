import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useUserInputs from "../../hooks/auth/useUserInputs";
import Inputs from "../../components/auth/Inputs";
import { PATH_NAME } from "../../constants/routes";
import { getAuthPageInfoForPathname } from "../../utils/authUtil";

export default function AuthPage() {
  const { pathname } = useLocation();

  const { userInputs, isValidCheck, saveUserInputs } = useUserInputs();
  const { email, password } = userInputs;

  const { signin, signup } = useAuth();

  const navigate = useNavigate();
  const pageInfo = getAuthPageInfoForPathname(pathname);

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = "아이디와 비밀번호를 확인해주세요";

    if (pathname === PATH_NAME.SIGNIN) {
      signin(email, password, navigate)
        .then(() => navigate(PATH_NAME.TODOS))
        .catch(() => alert(msg));
    } else {
      signup(email, password, navigate)
        .then(() => navigate(PATH_NAME.SIGNIN))
        .catch(() => alert(msg));
      alert("회원가입 완료!");
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">
        {pageInfo.title}
      </div>
      <form className="p-1" onSubmit={handleSubmit}>
        <Inputs email={email} password={password} onChange={saveUserInputs} />
        <div className="flex justify-between items-center">
          <Link to={pageInfo.moveToPathname}>{pageInfo.nameOfPageToMove}</Link>
          <button
            className="disabled:bg-gray-400"
            type="submit"
            disabled={!isValidCheck}
            data-testid={pageInfo.testId}
          >
            {pageInfo.title}
          </button>
        </div>
      </form>
    </div>
  );
}
