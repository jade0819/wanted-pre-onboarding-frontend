import React from "react";

export default function InputEmail({ value, onChange }) {
  return (
    <div className="mb-5">
      <label>이메일</label>
      <input
        className="w-full mt-1 p-3 rounded-md border border-gray-300 outline-none"
        id="email"
        type="email"
        value={value}
        onChange={onChange}
        data-testid="email-input"
        placeholder="이메일은 '@'를 포함해서 입력해주세요."
      />
    </div>
  );
}
