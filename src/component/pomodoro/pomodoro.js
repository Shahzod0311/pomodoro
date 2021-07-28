import { useState, useEffect } from "react";
import "./style.css";

function Pomodoro(props) {
  const WorkTime = 25;
  const RestTime = 5;
  const setZero = (n) => (n < 10 ? "0" + n : n);
  const [minute, setminute] = useState(WorkTime);
  const [second, setsecond] = useState(0);
  const [Isworking, setIsworking] = useState(true);
  const [status, setstatus] = useState(false);
  const [pause, setpause] = useState(true);

  useEffect(() => {
    status &&
      pause &&
      setTimeout(() => {
        if (second > 0) setsecond(second - 1);
        else {
          if (minute !== 0) setsecond(59);
          if (minute > 0) setminute(minute - 1);
          else {
            if (Isworking) {
              alert("dam olish vaqti keldi!");
              setminute(RestTime);
            } else {
              alert("ish vaqti");
              setminute(WorkTime);
            }
            setIsworking(!Isworking);
          }
        }
      }, 1000);
  }, [second, Isworking, status, pause]);

  return status ? (
    <div>
      <h1 className="text-white py-5">
        {setZero(minute)}:{setZero(second)}
      </h1>
      <button className="btn btn-danger" onClick={() => setpause(!pause)}>
        {pause ? `pause` : `continue`}
      </button>
    </div>
  ) : (
    <div>
      <h1 className="text-white pt-5 pb-3">
        {setZero(minute)}:{setZero(second)}
      </h1>
      <button className="btn btn-success" onClick={() => setstatus(true)}>
        start
      </button>
    </div>
  );
}

export default Pomodoro;
