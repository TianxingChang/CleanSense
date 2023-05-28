import "../styles/CardZone.css";
import { useState, useEffect } from "react";
import Collapsible from "./Collapsible";
import Topbar from "./TopBar";
import Infobar from "./InfoBar";
import Filter from "./Filter";

export default function CardZone() {
  const [allToilet, setAllToilet] = useState([]);
  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const response = await fetch("http://20.24.98.15:8000/current");
        const newData = await response.json();
        setAllToilet(newData);
        // setInterval(console.log("get:   ", allToilet), 2000);
      };
      fetchData();
    }, 1000);
  }, []);
  let x = 3,
    y = 2,
    z = 3;
  if (allToilet.length !== 0) {
    x = allToilet[0].avail_num;
    y = allToilet[0].people_num;
    z = allToilet[0].cub_status[0][0];
  }
  // y = allToilet.length!=0 ? allToilet[0].people_num:0,
  // z = allToilet.length!=0？allToilet[0].cub_status[0][0]:0;

  const totalArray = [
    [0, 1, 15, 16, 4, 1],
    [
      ["lg1-01", { cub: x, people: y, hygiene: z }],
      ["lg7-1", { cub: 0, people: 2, hygiene: 5 }],
      ["lg2-11", { cub: 0, people: 16, hygiene: 4 }],
      ["lg5-04", { cub: 0, people: 17, hygiene: 5 }],
      ["g-02", { cub: 0, people: 2, hygiene: 0 }],
      ["g-01", { cub: 0, people: 5, hygiene: 2 }],
    ],
  ];

  // Create a new array of objects that map the values of the first and second arrays
  const mappedArray = totalArray[0].map((value, index) => {
    return { value: value, label: totalArray[1][index] };
  });

  // Sort the mapped array based on the value property
  mappedArray.sort((a, b) => a.value - b.value);

  // Create a new array that maps the sorted values back to the original format
  const sortedArray = [
    mappedArray.map((item) => item.value),
    mappedArray.map((item) => item.label),
  ];

  const renderCardZone = (sortedArray) => {
    return sortedArray[0].map((time, index) => {
      const passedArray = [time, sortedArray[1][index]];
      return <Collapsible Array={passedArray} />;
    });
  };

  return (
    <>
      <Topbar />
      <h1 className="title"> Toilets List: </h1>
      <Filter />
      <Infobar />
      <div className="card_zone">
        <div className="card_container">
          {renderCardZone(sortedArray)}
          {/* <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible /> */}
        </div>
      </div>
    </>
  );
}
