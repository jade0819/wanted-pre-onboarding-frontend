import React from "react";

export default function Inputs({ email, password, onChange }) {
  return (
    <>
      <div className="mb-5">
        <label>이메일</label>
        <input
          className="w-full mt-1 p-3 rounded-md border border-gray-300 outline-none"
          name="email"
          type="email"
          value={email}
          onChange={(e) => onChange(e.target)}
          data-testid="email-input"
          placeholder="이메일은 '@'를 포함해서 입력해주세요."
        />
      </div>
      <div className="mb-5">
        <label>패스워드</label>
        <input
          className="w-full mt-1 p-3 rounded-md border border-gray-300 outline-none"
          name="password"
          type="password"
          value={password}
          onChange={(e) => onChange(e.target)}
          data-testid="password-input"
          placeholder="비밀번호는 8자 이상 입력해주세요."
        />
      </div>
    </>
  );
}
