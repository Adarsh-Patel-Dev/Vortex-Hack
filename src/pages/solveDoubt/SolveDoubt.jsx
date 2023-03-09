import React from "react";
import "./index.css";
import DoubtList from "../../components/doubtList";
import { useDoubtContext } from "../../context/doubtContext";

function SolveDoubt() {
  const { doubtTitle, setDoubtTitle,doubtDesc, setDoubtDesc,tag, setTag,doubtList, setDoubtList } = useDoubtContext();
  const doubtLists = localStorage.getItem("allDoubts")
  console.log("list",doubtLists);
  return (
    <div className="solve-doubt-wrapper">
      {
        doubtList.length>0 ? ( doubtList.map(e=>(<DoubtList prop={e}/>))) : <p className="empty-doubt-mgs">Your doubts will appear here.</p>
      }
      
    </div>
  );
}

export default SolveDoubt;
