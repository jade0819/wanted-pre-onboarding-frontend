import { useState } from "react";

const regexFor = {
  email: /@/,
  password: /^.{8,}$/,
};

const useUserInputs = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const validUserInputs = {
    email: regexFor.email.test(userInputs.email),
    password: regexFor.password.test(userInputs.password),
  };

  const isValidCheck = validUserInputs.email && validUserInputs.password;

  const saveUserInputs = ({ name, value }) => {
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  return { userInputs, isValidCheck, saveUserInputs };
};

export default useUserInputs;
