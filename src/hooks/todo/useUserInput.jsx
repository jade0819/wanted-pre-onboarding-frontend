import { useState } from "react";

const useUserInput = (originalValue) => {
  const [userInput, setUserInput] = useState(originalValue || "");

  const saveUserInput = ({ value }) => {
    setUserInput(value);
  };

  const cancelUserInput = () => {
    setUserInput(originalValue);
  };

  return { userInput, saveUserInput, cancelUserInput };
};

export default useUserInput;
