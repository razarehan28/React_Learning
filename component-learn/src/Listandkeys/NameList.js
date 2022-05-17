import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Rehan", "Harsh", "Rutvi", "Anirudhh"];
  const persons = [
    {
      id: 1,
      name: "Rehan",
      Age: 23,
      skill: "React",
    },
    {
      id: 2,
      name: "Ravi",
      Age: 24,
      skill: "Python",
    },
    {
      id: 3,
      name: "Rohan",
      Age: 25,
      skill: "Java",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
