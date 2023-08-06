import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { isValidatieCheck } from "../../utils/validation";
import { signin } from "../../apis/authApi";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

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
          <Button title={"로그인"} onDisabled={isButtonDisabled} />
          <Link to="/signup">회원가입하기</Link>
        </div>
      </form>
    </div>
  );
}
