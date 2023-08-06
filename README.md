# 원티드 프리온보딩 프론트엔드 - [선발과제](https://github.com/walking-sunset/selection-task)

로그인 / 회원가입 기능과 TODO LIST

지원자: 양음정

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/TailwindCSS-2D79C7?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=react router&logoColor=white">

## 프로젝트 실행 방법

- 배포 사이트 : [https://64920b73964eae0008481001--charming-boba-7e6531.netlify.app/](https://64920b73964eae0008481001--charming-boba-7e6531.netlify.app/)

- 로컬

  ```shell
  > git clone https://github.com/jade0819/wanted-pre-onboarding-frontend.git
  > npm install
  > npm start
  ```

## 미리보기

### 로그인/회원가입

![auth](https://github.com/jade0819/wanted-pre-onboarding-frontend/assets/88275787/1cd5f676-a76d-4354-bbd8-6af377facd6c)

### TODO LIST

![todo](https://github.com/jade0819/wanted-pre-onboarding-frontend/assets/88275787/36bb9e8e-f034-45ce-bdd5-0566098eb8bb)

## 구현 기능 및 프로젝트 폴더 구조

### 구현 기능

- 로그인/회원가입

  - 회원가입 시 이메일, 비밀번호 유효성 검사
  - 로그인 시 JWT 토근 로컬스토리지 저장
  - 토큰 유무에 따른 리다이렉트 처리

- 투두 리스트
  - 할일 추가/수정/삭제
  - 체크박스로 할일 완료 유무 변경

---

### 프로젝트 구조

```
--📁 src
  ---📁 apis -> API 통신 관련 폴더
    ├── authApi
    └── todoApi
  ---📁 components -> 컴포넌트 폴더
    ├── auth
    └── todo
  ---📁 context -> context API 폴더
    └── auth
  ---📁 hooks -> custom hook을 담은 폴더
  ---📁 pages -> 페이지 컴포넌트 폴더
    ├── notfound
    ├── redirect
    ├── signin
    ├── signup
    └── todo
  ---📁 util -> 공통 함수 등 유틸 파일을 담은 폴더
```
