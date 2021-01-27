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

## 5. 로그인-홈 화면 연결 => Router

### 1. yarn add react-router-dom

### 2. App.js에서 <BrowserRouter>, <Switch>, <Route> 추가

### 3. <Route (exact) path="?"> 로 어떤 path에서 어떤 page가 뜨게 할 것인지 결정.

Ex. /users 와 /users/abc 같은 비슷한 url을 구분할 때는 exact path 를 써준다

### 4. components에 maker 생성하고 app.jsx -> <Switch> 하나에 할당

### 5. 로그인하면 maker 화면으로 넘어가기

5-1. 화면에서 다른 화면으로 넘어갈 때 : const history = useHistory()
5-2. goToMaker 함수 만들기
5-3. console.log 찍은거에서 uid 확인 후 history 에서 path랑 같이 obj로 넘겨주기
5-4. authService.~~.then() 괄호 안 수정

### 6. 사용자 기록에 따라 로그인 유지 (Ref. firebaseDocs => web => Get Started)

6-1. authService.js 에서 onAuthChange
6-2. login.jsx => useEffect : user가 있으면 maker로 이동

### 7. Maker 화면

7-1. Header, Footer 불러오기
7-2. authService에서 logout 기능 만들기
7-3. maker.jsx 에서 logout 구현 : 로그아웃되면 home으로 돌아가기
=> useEffect : user가 없다면 home으로 이동 ( + history)
7-4. maker에서 Header와 Footer 사이에 div로 컨텐츠 들어갈 부분 만들어주기

### 8. Editor 화면 & Preview 화면

8-1. 각각 만들어서 Maker div 태그 안에 넣어주기
8-2. css => flex-basis 활용해서 50% 씩 나눠주기
8-3. maker.css 에서 화면 크기에 따라 절반이 아래로 나눠지게 해주기
