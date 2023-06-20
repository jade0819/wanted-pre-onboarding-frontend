import React from "react";
import { Link } from "react-router-dom";

export default function Form({
  type,
  handleSubmit,
  isButtonDisabled,
  children,
}) {
  return (
    <form className="p-1" onSubmit={handleSubmit}>
      {children}
      <div className="flex justify-between items-center">
        {type && type === "signin" ? (
          <>
            <button
              className="disabled:bg-gray-400"
              type="submit"
              disabled={isButtonDisabled}
              data-testid="signin-button"
            >
              로그인
            </button>
            <Link to="/signup">회원가입하기</Link>
          </>
        ) : (
          <>
            <button
              className="disabled:bg-gray-400"
              type="submit"
              disabled={isButtonDisabled}
              data-testid="signup-button"
            >
              회원가입
            </button>
            <Link to="/signin">로그인하기</Link>
          </>
        )}
      </div>
    </form>
  );
}
