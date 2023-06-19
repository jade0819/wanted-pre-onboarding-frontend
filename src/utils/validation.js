export const emailValidateCheck = (email) => {
  if (email && email.includes("@")) return true;
  else return false;
};

export const passwordValidateCheck = (password) => {
  if (password && password.length >= 8) return true;
  else return false;
};

export const isValidatieCheck = (values) => {
  return (
    emailValidateCheck(values.email) && passwordValidateCheck(values.password)
  );
};
