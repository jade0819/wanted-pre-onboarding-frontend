import React from "react";

export default function InputPassword({ value, onChange }) {
  return (
    <div className="mb-5">
      <label>패스워드</label>
      <input
        className="w-full mt-1 p-3 rounded-md border border-gray-300 outline-none"
        id="password"
        type="password"
        value={value}
        onChange={onChange}
        data-testid="password-input"
        placeholder="비밀번호는 8자 이상 입력해주세요."
      />
    </div>
  );
}
