import { useState } from "react";

export default function useInput(initialValue) {
  const [values, setValues] = useState(initialValue);

  const onChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return [values, onChange];
}
