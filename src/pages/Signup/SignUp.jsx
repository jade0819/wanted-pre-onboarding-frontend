import React from "react";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { signup } from "../../apis/AuthApi";
import { isValidatieCheck } from "../../utils/validation";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";

export default function SignUp() {
  const [values, onChange] = useInput({
    email: "",
    password: "",
  });
  const isButtonDisabled = !isValidatieCheck(values);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입!");

    if (!values) return;

    console.log(values);
    signup(values)
      .then((res) => {
        navigate("/signin");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">회원가입</div>
      <Form
        type={"signup"}
        handleSubmit={handleSubmit}
        buttonTitle={"회원가입"}
        isButtonDisabled={isButtonDisabled}
      >
        <InputEmail value={values.email} onChange={onChange} />
        <InputPassword value={values.password} onChange={onChange} />
      </Form>
    </div>
  );
}
