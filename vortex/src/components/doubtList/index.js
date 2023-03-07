import React from "react";
import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import "./index.css"

function DoubtList({prop}) {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [toggleFooter, setToggleFooter] = useState(false);
  const [toggleTextArea, setToggleTextArea] = useState(true);

  const [solution, setSolution] = useState("Please enter your solution");
  return (
    <div>
      <ul className="doubt-list">
        <li>
          <button>
            <BsFillBookmarkCheckFill />
          </button>
          <div className="doubt-section">
            <div className="doubt-details">
              <strong>{prop.title}</strong>
              <p>{prop.desc}</p>
              <p className="tag">{prop.tag}</p>
            </div>
            <button onClick={() => setToggleFooter(true)} className="primary-btn">
              Solve
            </button>
          </div>
          <br />
          {toggleFooter && (
            <div>
              <textarea 
              className="sol-textarea"
              onChange={(e)=>setSolution(e.target.value)}/>
              <br />
              <button 
              className="submit-btn"
              onClick={()=>{setToggleTextArea(false)
              
              }}>Submit Answer</button>

              {
                !toggleTextArea &&(<p>{solution}</p>)
              }

              <div className="vote-btn">
                <button onClick={() => setLike((e) => e + 1)}>
                  <span>
                    <BiUpvote />
                    {like}
                  </span>
                </button>

                <button onClick={() => setDislike((e) => e+1)}>
                  <span>
                    <BiDownvote />
                    {dislike}
                  </span>
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DoubtList;
