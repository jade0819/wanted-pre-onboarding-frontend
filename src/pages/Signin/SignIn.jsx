import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useInput from "../../hooks/useInput";
import Form from "../../components/Form";
import { signin } from "../../apis/AuthApi";
import { isValidatieCheck } from "../../utils/validation";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";

export default function SignIn() {
  const { setToken } = useAuthContext();
  const [values, onChange] = useInput({
    email: "",
    password: "",
  });

  const isButtonDisabled = !isValidatieCheck(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인!");

    if (!values) return;

    console.log(values);
    signin(values)
      .then((res) => {
        console.log(res.accessToken);
        setToken(res.accessToken);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">로그인</div>
      <Form
        type={"signin"}
        handleSubmit={handleSubmit}
        buttonTitle={"로그인"}
        isButtonDisabled={isButtonDisabled}
      >
        <InputEmail value={values.email} onChange={onChange} />
        <InputPassword value={values.password} onChange={onChange} />
      </Form>
    </div>
  );
}
