import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pomodoro from "./component/pomodoro/pomodoro";

function App() {
  return (
    <div className="bod">
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="clock text-center">
            <Pomodoro />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
