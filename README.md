### 1. common에 공통적으로 쓰일 css 등록

### 2. Firebase 등록

1. src에 service 폴더 생성
2. firebase.js 에 firebase SDK 등록
3. API Key 등은 .env에 보관
4. auth_service.js에서 로그인 기능
5. firebase -> authentication -> google이랑 github 사용설정 해주기
6. github는 settings -> developer settings에서 client 설정

## 3. 로그인 화면 구현

1. footer, header, login components 만들고 각각 jsx파일 생성
2. login 에서 로그인 화면 구성 (import header, footer)
3. index.js에서 import authService & app 에서 authService 실행
   => app.jsx에 props로 authService 전달
   => login.jsx에가서 props에 authService 전달
4. Login component 안에 Login할 수 있는 함수 생성 = onLogin => authservice.login 실행

## 4. header, footer, login

1. login에 Logout 구성, img 삽입,
2. css 작성

## 5. 로그인-홈 화면 연결 => Router

1. yarn add react-router-dom
2. App.js에서 BrowserRouter, Switch, Route 추가
3. <Route (exact) path="?"> 로 어떤 path에서 어떤 page가 뜨게 할 것인지 결정. Ex. /users 와 /users/abc 같은 비슷한 url을 구분할 때는 exact path 를 써준다
4. components에 maker 생성하고 app.jsx -> Switch 하나에 할당

## 5. 로그인하면 maker 화면으로 넘어가기

1. 화면에서 다른 화면으로 넘어갈 때 : const history = useHistory()
2. goToMaker 함수 만들기
3. console.log 찍은거에서 uid 확인 후 history 에서 path랑 같이 obj로 넘겨주기
4. authService.~~.then() 괄호 안 수정

### 6. 사용자 기록에 따라 로그인 유지 (Ref. firebaseDocs => web => Get Started)

1. authService.js 에서 onAuthChange
2. login.jsx => useEffect : user가 있으면 maker로 이동

### 7. Maker 화면

1. Header, Footer 불러오기
2. authService에서 logout 기능 만들기
3. maker.jsx 에서 logout 구현 : 로그아웃되면 home으로 돌아가기
   => useEffect : user가 없다면 home으로 이동 ( + history)
4. maker에서 Header와 Footer 사이에 div로 컨텐츠 들어갈 부분 만들어주기

### 8. Editor 화면 & Preview 화면

1. 각각 만들어서 Maker div 태그 안에 넣어주기
2. 각각 css => flex-basis 활용해서 50% 씩 나눠주기
3. maker.css 에서 화면 크기에 따라 절반이 아래로 나눠지게 해주기
4. maker에서 card 상태를 수정할 수 있게 만들기 => [cards, setCards] = useState(...)
   => ... 에 들어가야할 props들 설정
5. 8-4에서 만든걸 editor와 preview에 전달 => editor랑 preview에서 props로 cards 받기
6. card component 만들고 props로 cards에서 map으로 뺀 card 받기
7. cardEditForm component 만들고 props로 cardsdptj map으로 뺀 card 받기

### 9. card 화면

1. maker.js 의 useState에서 설정한 props들 다 받아서 오기
2. html 구조 만들기
3. theme 별로 다른 card 색상 내보내도록
   함수 하나 추가로 짜주기
4. card css

### 10. editor 화면

1. card에서 props 받아오기 (card.jsx처럼)
2. cardEditForm에 html 기본 구조 만들기
3. button component 생성
4. cardEditForm에 Button 추가
5. imageFileInput component 생성

### 11. AddForm 기능 추가

1. CardEditForm이랑 비슷하므로 component 복사하고 props 지우고, 이름 바꾼 후 value 값을 다 placeholder로 바꿔줌
2. editor.jsx 에 추가
3. Input 값들 useRef() 를 이용하여 input 에 ref={...} 으로 넣어주기
4. onSubmit 으로 클릭하면 add 하게 만들기
5. addCard 함수 prop으로 받기 : CardAddForm => Editor => Maker
6. maker.jsx에서 addCard 만들고 state업데이트 : [...cards, card] === [기존것들, 새로운거]
