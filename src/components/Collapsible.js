import "../styles/Collapsible.css";
import { useState } from "react";
import Guide from "../assets/images/guide.png";

export default function Collapsible() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsible">
      <button type="button" className="button" onClick={toggle}>
        <div
          className="time_card"
          style={{ borderRadius: open ? "10px 0 0 0" : "10px 0 0 10px" }}
        >
          Available
        </div>
        <div
          className="id_card"
          style={{ borderRadius: open ? "0 10px 0 0" : "0 10px 10px 0" }}
        >
          lg1
        </div>
      </button>
      {open && (
        <div className="content">
          <div className="left-content">
            <div className="cub-num">cubcibles left</div>
            <div className="people-num"> people inside</div>
            <div className="report-num"> bad hygiene level</div>
          </div>
          <div className="right-content">
            <img src={Guide} className="guide" alt="guide me" />
          </div>
        </div>
      )}
    </div>
  );
}
