# 원티드 프리온보딩 프론트엔드 - 선발과제

<br />

## 🚀 목표

로그인 및 회원가입, TO DO LIST 기능 구현

[선발과제 안내 바로가기](https://github.com/walking-sunset/selection-task)

<br />

## 🛠️ 스킬

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/TailwindCSS-2D79C7?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=react router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/React icons-e91e63.svg?&style=for-the-badge&logo=React&logoColor=white"/>

<br />

## 🔗 프로젝트 배포 링크

**배포 링크**: [https://stunning-bienenstitch-bc1419.netlify.app/](https://stunning-bienenstitch-bc1419.netlify.app/)

<br />

## 🛫 개발 환경에서 프로젝트 실행 방법

1. 터미널에서 이 저장소를 git clone 하거나, 파일을 다운받아 압축을 해제 해주세요.

2. 터미널에 아래와 같이 명령어를 입력해주세요.
   ```shell
   > git clone https://github.com/jade0819/wanted-pre-onboarding-frontend.git
   > cd wanted-pre-onboarding-frontend
   > echo "REACT_APP_API_URL = https://www.pre-onboarding-selection-task.store" > .env
   > npm install
   > npm start
   ```

<br />

## 👀 데모 영상

### 로그인/회원가입

![auth](https://github.com/jade0819/wanted-pre-onboarding-frontend/assets/88275787/1cd5f676-a76d-4354-bbd8-6af377facd6c)

### TODO LIST

![todo](https://github.com/jade0819/wanted-pre-onboarding-frontend/assets/88275787/36bb9e8e-f034-45ce-bdd5-0566098eb8bb)

<br />

## 💻 주요 기능

- 로그인/회원가입

  - `/signup` 경로에 회원가입, `/signin` 경로에 로그인 기능 구현
  - 회원가입 시 이메일, 비밀번호 유효성 검사
  - 로그인 시 JWT 토근 로컬스토리지 저장
  - 토큰 유무에 따른 리다이렉트 처리

<br />

- 투두 리스트
  - Todo 추가/수정/삭제
  - 체크박스로 Todo 완료 유무 표시
  - 수정 모드 시 제출/취소 버튼, 기본 모드 시 수정/삭제 버튼 표시

<br />

## 🏆 BestPractice

Best Practice 도출 과정의 상세 설명은 해당 [링크](https://www.google.com/)에서 확인하실 수 있습니다.

<br />

## 💻 기능 구현 과정

### 과제 작업 준비

그동안에는 요구사항을 보고 바로 코드를 작성하곤 했는데, 이번 과제에서는 요구사항을 분석하고 예상되는 컴포넌트 구조를 미리 짜보는 등 작업 준비 과정에 시간을 썼습니다.

- **준비1**

  내용1

- **준비2**

  내용2

- **준비3**

  내용3

- **준비4**

  내용4

<br />

### 과제 수행에서 중점을 둔 부분

- **Context API 사용**

  내용1

- **컴포넌트 구조**

  내용2

- **좀 더 추상적인 유틸 함수 사용**

  내용3

<br />

## 🌲 프로젝트 구조

```
--📁 src
  ---📁 apis # 통신 관련 폴더
    ├── authApi
    └── todoApi
  ---📁 components # 컴포넌트 폴더
    ├── auth
    └── todo
  ---📁 context # context API 폴더
    └── auth
  ---📁 hooks # custom hook을 담은 폴더
  ---📁 pages # 페이지 컴포넌트 폴더
    ├── notfound
    ├── redirect
    ├── signin
    ├── signup
    └── todo
  ---📁 util # 공통 함수 등 유틸 파일을 담은 폴더
```
