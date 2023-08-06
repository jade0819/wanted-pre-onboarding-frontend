import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { isValidatieCheck } from "../../utils/validation";
import { signin } from "../../apis/authApi";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";

export default function SignInPage() {
  const { setToken } = useAuthContext();
  const [values, onChange] = useInput({
    email: "",
    password: "",
  });

  const isButtonDisabled = !isValidatieCheck(values);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values) return;

    signin(values)
      .then((res) => setToken(res.accessToken))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">로그인</div>
      <form className="p-1" onSubmit={handleSubmit}>
        <InputEmail value={values.email} onChange={onChange} />
        <InputPassword value={values.password} onChange={onChange} />
        <div className="flex justify-between items-center">
          <button
            className="disabled:bg-gray-400"
            type="submit"
            disabled={isButtonDisabled}
            data-testid="signin-button"
          >
            로그인
          </button>
          <Link to="/signup">회원가입하기</Link>
        </div>
      </form>
    </div>
  );
}
