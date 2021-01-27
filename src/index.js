import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";
import ImageUploader from "./service/imageUploader";
import ImageFileInput from "./components/imageFileInput/imageFileInput";

//가장 최상단에서 실행시키고 아래로 props로 내려감
const authService = new AuthService();

//props 들이 맨 아래까지 내려가므로 여기서 한 번에 고쳐서 넣는 것이 효율적임
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
