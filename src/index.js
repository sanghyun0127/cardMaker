import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";
import ImageUploader from "./service/imageUploader";
import ImageFileInput from "./components/imageFileInput/imageFileInput";

//가장 최상단에서 실행시키고 아래로 props로 내려감
const authService = new AuthService();

/*
props 들이 맨 아래까지 내려가므로 여기서 한 번에 고쳐서 넣는 것이
다른 곳에서 컴포넌트를 고치지 않고 여기서 받아서 해결할 수 있으므로 효율적
 */
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
