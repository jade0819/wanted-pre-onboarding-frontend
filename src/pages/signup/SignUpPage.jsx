import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { isValidatieCheck } from "../../utils/validation";
import { signup } from "../../apis/authApi";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

export default function SignUpPage() {
  const [values, onChange] = useInput({
    email: "",
    password: "",
  });

  const isButtonDisabled = !isValidatieCheck(values);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values) return;

    if (!isValidatieCheck(values)) return;

    signup(values)
      .then((res) => navigate("/signin"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">회원가입</div>
      <form className="p-1" onSubmit={handleSubmit}>
        <InputEmail value={values.email} onChange={onChange} />
        <InputPassword value={values.password} onChange={onChange} />
        <div className="flex justify-between items-center">
          <Button title={"회원가입"} onDisabled={isButtonDisabled} />
          <Link to="/signin">로그인하기</Link>
        </div>
      </form>
    </div>
  );
}
