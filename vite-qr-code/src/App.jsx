import "./App.css";
import qrcoed from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="qr-code">
      <div className="inner">
        <img src={qrcoed} alt="" />
        <p className="text-preset-1 outfit-700">
          Improve your front-end skills by building projects
        </p>
        <p className="text-preset-2 outfit-400">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Li</a>.
      </div>
    </div>
  );
}

export default App;
