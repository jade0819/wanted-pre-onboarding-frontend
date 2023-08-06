import React from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function TodoPage() {
  const { removeToken } = useAuthContext();

  return (
    <div>
      투두리스트
      <button onClick={removeToken}>로그아웃</button>
    </div>
  );
}
