import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../apis/authApi";

export default function SignUpPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values) return;

    signup(values)
      .then((res) => navigate("/signin"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">회원가입</div>
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
          <button type="submit">회원가입</button>
          <Link to="/signin">로그인하기</Link>
        </div>
      </form>
    </div>
  );
}
