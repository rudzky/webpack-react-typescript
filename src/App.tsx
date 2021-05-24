import "./style.css";
import "./customStyles.scss";
import Peter from "./peter.jpg";
import FlutterLogo from "./flutter.svg";

export const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>
        What a wonderful day!! {process.env.NODE_ENV} {process.env.name}
      </h2>
      <img src={Peter} alt="Just Peter Griffin" width="300" height="200" />
      <img src={FlutterLogo} alt="Just flutter logo" width="200" height="200" />
    </>
  );
};
