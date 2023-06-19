import React from "react";
import { Link } from "react-router-dom";

export default function Form({
  type,
  handleSubmit,
  buttonTitle,
  isButtonDisabled,
  children,
}) {
  return (
    <form className="p-1" onSubmit={handleSubmit}>
      {children}
      <div className="flex justify-between items-center">
        <button
          className="bg-black text-white p-2 rounded-md disabled:bg-gray-400"
          type="submit"
          disabled={isButtonDisabled}
          data-testid={type === "signin" ? "signin-button" : "signup-button"}
        >
          {buttonTitle}
        </button>
        {type && type === "signin" && <Link to="/signup">회원가입하기</Link>}
        {type && type === "signup" && <Link to="/signin">로그인하기</Link>}
      </div>
    </form>
  );
}
