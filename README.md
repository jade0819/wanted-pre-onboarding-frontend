# 원티드 프리온보딩 프론트엔드 - 선발과제

<br />

## 🚀 목표

#### 로그인 및 회원가입, TODO LIST 기능 구현

[선발과제 안내 바로가기](https://github.com/walking-sunset/selection-task)

<br />

## 🛠️ 스킬

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/CRA-09d3ac.svg?&style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-2D79C7?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/React_icons-e91e63.svg?&style=for-the-badge&logo=React&logoColor=white"/>

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
  - 로그인 및 회원가입 시 이메일과 비밀번호 유효성 검사
  - 로그인 시 JWT 토근 로컬스토리지 저장
  - 로그인 여부에 따른 리다이렉트 처리

<br />

- 투두 리스트

  - `/todo` 경로에 투두 리스트 기능 구현
  - Todo 추가/수정/삭제 기능 구현
  - 체크박스로 Todo 완료 유무 표시
  - 수정 모드 시 제출/취소 버튼, 기본 모드 시 수정/삭제 버튼 표시

<br />

## 🏆 BestPractice

- [x] **`Axios interceptors`를 사용한 인증 토큰 자동 추가**

  **투두 리스트** 관련 API를 요청할 때 각 요청에 인증 토큰을 포함해야 합니다. 이를 효과적으로 관리하기 위해 `Axios` 라이브러리의 `interceptors` 기능을 사용하여 API 요청을 보내기 전에 자동으로 **헤더**에 인증 토큰을 추가함으로써 모든 API 요청에 일관되게 인증 토큰을 삽입할 수 있으며, 코드의 중복을 줄이고 유지보수의 효율성을 높일 수 있습니다.

- [x] **로그인 여부에 따른 리다이렉트 처리**

  초기에는 로그인 상태에 따라 `useEffect`와 `useNavigate`를 사용하여 리다이렉트를 처리했습니다. 하지만 이 방법은 페이지 수가 많아짐에 따라 각 컴포넌트마다 useEffect와 조건 로직을 반복적으로 작성해야 하는 번거로움이 있었고, 리다이렉트 경로 변경 시 유지보수가 어렵다는 문제가 있었습니다. 또한, `useEffect`가 첫 렌더링 이후에 실행되는 특성으로 인해 성능이 저하되는 문제도 발생했습니다. 이러한 단점들을 해결하기 위해, `react-router`의
  **중첩 라우팅**과 `React`의 **조건부 렌더링**을 활용한 리다이렉트 처리 방식으로 전환하였고, 이를 통해 이전 방법의 모든 문제점들을 효과적으로 해결할 수 있었습니다.

- [x] **스타일링**

  스타일링을 하기 위해 `TailwindCSS` 프레임워크를 선택한 이유는 프로젝트의 규모가 작고 인라인 스타일을 사용하는 것처럼 쉽고 빠르게 스타일링을 할 수 있으며, 일관된 디자인을 가능하게 해주는 장점 때문에 선택했습니다.

<br />

## 💻 리팩토링 과정

### 리팩토링에서 중점을 둔 부분

원티드 인턴십에서 학습한 내용을 최대한 코드에 녹여내려고 노력했습니다.

<br />

- **SoC 원칙을 적용한 관심사 분리**

  SoC(혹은 SRP) 원칙을 적용해 각 모듈들이 하나의 관심사(목적)만 처리하도록 코드를 작성 했습니다. 여러 로직에 걸쳐서 수행되어야 하는 **HTTP 통신** 모듈을 **횡단 관심사**로 처리했으며, 인증에 관련된 로직(signin, signup, login)과 Todos에 관련된 로직(get, create, update, delete)을 각각의 **service** 모듈로 분리, 스토리지 관련 로직도 **storage** 모듈로 분리함으로써 코드의 `재사용성`과 `유지보수성`을 높였습니다.

<br />

- **OCP 원칙을 적용한 의존성 주입**

  의존성 주입에 대한 고민은 이렇게 시작됐습니다.

  - Axios 대신 window.fetch로 변경해야 된다면?
  - API URL이 변경된다면? 혹은 여러가지 URL을 사용한다면?
  - 인증 토큰의 저장소가 LocalStorage에서 SessionStorage로 변경된다면?

  위와 같은 변경 사항이 발생할 경우를 고려했을 때 **유지보수가 용이한 코드를 작성하기 위해 변경 가능성이 있는 의존성을 주입해주는 방식**으로 코드를 작성했습니다.

  - API 호출 로직에서 HTTP 클라이언트 자체를 return하는 메서드를 만들어서 **HTTP 클라이언트에 대한 의존성을 내부에서 갖고 있는게 아닌, 외부에서 주입받는 형태**로 작성 했습니다.

    ```javascript
    async fetch(endPoint, options = {}) {
      return await this.#instance({
        url: endPoint,
        ...options,
      });
    }
    ```

    window.fetch로 변경되었을 경우 아래와 같이 window.fetch를 return 합니다.

    ```javascript
    async fetch(endPoint, options = {}) {
      return await window.fetch(this.#baseURL + endPoint, {...options});
    }
    ```

  - HTTP 클라이언트 모듈에서 `baseURL`과 `storage` 의존성을 주입받는 방식으로 코드를 작성함으로써 API URL이 변경되거나, 스토리지가 변경되어도 변경된 의존성만 주입하면 되도록 코드를 작성했습니다.

    ```javascript
    export class HttpClient {
      #baseURL;
      #storage;

      constructor(baseURL, storage) {
        this.#baseURL = baseURL;
        this.#storage = storage;
      }
    }

    const storage = new LocalStorage();
    const httpClient = new HttpClient(process.env.REACT_APP_API_URL, storage);
    ```

<br />

- **class를 사용한 상태 유지(stateful)**

  **상태와 동작을 같이 가져가야 하는 모듈**들은 `class`로 작성해서 상태를 유지하면서 동작할 수 있도록 코드를 구현했습니다.

  - HTTP 클라이언트 모듈에서 `URL`과 `storage` 상태를 유지하고 외부에서는 알 수 없도록 접근 제어자로 은닉 했으며, `fetch` 메서드로 상태에 따른 동작을 수행할 수 있도록 작성 했습니다.

    ```javascript
    export class HttpClient {
      #baseURL;
      #storage;

      constructor(baseURL, storage) {
        this.#baseURL = baseURL;
        this.#storage = storage;
      }

      async fetch(){...}
    }
    ```

  - Storage 모듈에서 `인증 토큰` 상태를 유지하면서 추가/수정/삭제 동작을 수행할 수 있도록 코드를 구현했습니다.

    ```javascript
    export class LocalStorage {
      #key;

      constructor() {
        this.#key = "ACCESS_TOKEN";
      }

      save(token) {...}

      get() {...}

      delete() {...}
    }
    ```

  - Service 모듈도 `httpClient`와 `storage`를 의존성으로 주입받아 상태를 유지하면서 API 호출 동작을 수행할 수 있도록 코드를 구현했습니다.

        ```javascript
        export class AuthService {
          constructor(httpClient, storage) {
            this.httpClient = httpClient;
            this.storage = storage;
          }

          signin() {...}
          signup() {...}
        }
        ```

<br />

- **Context API 사용 목적**

  기존 리팩토링 전 코드에서는 `Context API`를 **props driling**을 해결하기 위해 컴포넌트들에게 동일한 맥락(Context)를 전달하는데 사용했습니다. 이번 리팩토링에서는 **service를 의존성으로 주입 받아서 service와 관련된 컴포넌트들에게 동일한 맥락(Context)를 전달하는 목적**으로 `Context API`를 사용했습니다.

<br />

### 리팩토링을 진행하면서 배운 점

- **로그인 및 회원가입 시 이메일과 비밀번호 유효성 검사**

  "이메일과 비밀번호의 유효성 검사 결과를 상태 변수로 관리하는게 맞는걸까?" 라는 생각이 들어 고민에 빠지게 되었습니다. input 상태가 변경되면 리렌더링이 일어나는데, 변경된 input 상태에 대한 유효성 검사 상태도 변경되어야 하기 때문에 **2번의 리렌더링**이 일어나는 것은 매우 비효율적이며, input에 대한 valid의 **싱크**를 맞춰야하는 부분에서 버그가 발생할 수 있기 때문에 좋지 않은 코드라고 생각이 들었습니다. 하지만 확신이 들지 않아 이것저것 찾아보게 되었고, **리액트 공식 문서**에서 답을 찾을 수 있었습니다. [**Thinking in React**](https://react.dev/learn/thinking-in-react) 메뉴의 [**3단계: UI 상태에 대한 최소한이지만 완전한 표현 찾기**](https://react.dev/learn/thinking-in-react#step-3-find-the-minimal-but-complete-representation-of-ui-state) 설명을 읽고 vaild는 상태로 선언하면 안된다는 것을 알게 되었습니다. 그래서 **상태 변수가 아닌 일반 변수로 선언해서 input 변경에 대한 즉각적인 유효성 검사 결과**를 얻을 수 있게 되었습니다.

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
