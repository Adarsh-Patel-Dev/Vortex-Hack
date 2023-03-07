import React, { useState } from "react";
import { useDoubtContext } from "../../context/doubtContext";
import "./index.css";

function AskDoubt() {

  const { doubtTitle, setDoubtTitle,doubtDesc, setDoubtDesc,tag, setTag,doubtList, setDoubtList } = useDoubtContext();
  const options = ["Array", "Linked-list", "Recursion"];
  console.log(doubtTitle, doubtDesc);
  const onOptionChangeHandler = (event) => {
    setTag(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  function handleSubmit(){
    setDoubtList(oldDoubts=>[...oldDoubts,{title:doubtTitle,desc:doubtDesc,tag:tag}])
    setDoubtTitle("")
    setDoubtDesc("")
    setTag(null);
    localStorage.setItem("allDoubts",JSON.stringify(doubtList))
  }

  console.log("doubtList",doubtList);
  return (
    <div className="ask-doubt-wrapper">
      <div className="ask-doubt-form">
        <span>Title of doubt</span>
        <input
          required
          onChange={(e) => setDoubtTitle(e.target.value)}
          placeholder="enter title of doubt"
        />
        <span>Description of doubt</span>
        <textarea
        required
          onChange={(e) => setDoubtDesc(e.target.value)}
          placeholder="describe your doubt in detail..."
        />
        <select onChange={onOptionChangeHandler}>
          <option>Please choose one option</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AskDoubt;
