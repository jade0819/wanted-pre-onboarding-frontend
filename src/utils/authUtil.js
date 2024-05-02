import { PATH_NAME } from "../constants/routes";

function getAuthPageInfoForPathname(pathname) {
  const isSigninPath = pathname === PATH_NAME.SIGNIN;

  const { SIGNIN, SIGNUP } = PATH_NAME;

  const path = isSigninPath ? SIGNIN : SIGNUP;
  const title = isSigninPath ? "로그인" : "회원가입";
  const testId = isSigninPath ? "signin-button" : "signup-button";
  const moveToPathname = isSigninPath ? SIGNUP : SIGNIN;
  const nameOfPageToMove = isSigninPath ? "회원가입하기" : "로그인하기";

  return {
    path,
    title,
    testId,
    moveToPathname,
    nameOfPageToMove,
  };
}

export { getAuthPageInfoForPathname };
