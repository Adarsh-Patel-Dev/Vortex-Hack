import React from "react";
import "./index.css";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

function SolveDoubt() {
  return (
    <div className="solve-doubt-wrapper">
      <ul className="doubt-list">
        <li>
          <button>
            <BsFillBookmarkCheckFill />
          </button>
          <div className="doubt-section">
            <div className="doubt-details">
              <h3>Title of doubt2</h3>
              <p>Description of doubt2</p>
              <p className="tag">Hashing</p>
            </div>
            <button className="primary-btn">Solve</button>
          </div>
          <br />
          <textarea />
          <br />
          <button>submit</button>
          <div>
            <button>
              <span>
                <BiUpvote />
                1.3k
              </span>
            </button>

            <button>
              <span>
                <BiDownvote />
                1.5k
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SolveDoubt;
