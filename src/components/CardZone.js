import "../styles/CardZone.css";
// import { useState } from "react";
import Collapsible from "./Collapsible";
import Topbar from "./TopBar";
import Infobar from "./InfoBar";
import Filter from "./Filter";

export default function CardZone(prop) {
  // const timeArray = prop.Array[0];
  // const idArray = prop.Array[1]; //
  return (
    <>
      <Topbar />
      <h1 className="title"> Toilets Status: </h1>
      <Filter />
      <Infobar />
      <div className="card_zone">
        <div className="card_container">
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
          {/* <div
          className="time_card"
          style={{
            color: timeArray[0] >= 5 ? "red" : timeArray[0] ? "white" : "green",
          }}
        >
          {timeArray[0] ? timeArray[0] + " min" : "Available"}
        </div>
        <div className="id_card"> {idArray[0]}</div> */}
        </div>
      </div>
    </>
  );
}
