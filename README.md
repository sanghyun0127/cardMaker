## 1. common에 공통적으로 쓰일 css 등록

## 2. Firebase 등록 => src에 service 폴더 생성

1. firebase.js 에 firebase SDK 등록
2. API Key 등은 .env에 보관
3. auth_service.js에서 로그인 기능
4. firebase -> authentication -> google이랑 github 사용설정 해주기 \*\*github는 settings -> developer settings에서 client 설정

## 3. 로그인 화면 구현

1. footer, header, login components 만들고 각각 jsx파일 생성
2. login 에서 로그인 화면 구성 (import header, footer)
3. index.js에서 import authService & app 에서 authService 실행 => app.jsx에 props로 authService 전달
   => login.jsx에가서 props에 authService 전달
4. Login component 안에 Login할 수 있는 함수 생성 = onLogin => authservice.login 실행

## 4. Header, footer, login

1. login에 Logout 구성, img 삽입,
2. css 작성

## 5. 로그인화면 창 따로 뜨게하기 & Router

1.
