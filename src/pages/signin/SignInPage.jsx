import React, { useState } from "react";

export default function SignInPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {};

  return (
    <div className="w-full max-w-lg">
      <div className="text-3xl font-semibold text-center mb-6">로그인</div>
      <form className="p-1" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}
