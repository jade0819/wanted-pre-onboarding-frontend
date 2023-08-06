import React, { useState } from "react";
import { signin } from "../../apis/authApi";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values) return;

    signin(values)
      .then((res) => console.log(res.accessToken))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">로그인</div>
      <form className="p-1" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label>이메일</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label>패스워드</label>
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <button type="submit">로그인</button>
          <Link to="/signup">회원가입하기</Link>
        </div>
      </form>
    </div>
  );
}
