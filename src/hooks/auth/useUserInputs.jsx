import { useCallback, useState } from "react";

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

  const initUserInputs = useCallback(() => {
    setUserInputs({ email: "", password: "" });
  }, []);

  return { userInputs, isValidCheck, saveUserInputs, initUserInputs };
};

export default useUserInputs;
