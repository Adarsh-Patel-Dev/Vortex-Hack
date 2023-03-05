import React from 'react';
import "./index.css"

function AskDoubt() {
  return (
    <div className='ask-doubt-wrapper'>
     <form className='ask-doubt-form'>
        <span>
            Title of doubt
        </span>
        <input placeholder='enter title of doubt'/>
        <span>Description of doubt</span>
        <textarea placeholder='describe your doubt in detail...'/>
        <select>
            <option>select topic</option>
            <option>Time complexity</option>
            <option>Array</option>
            <option>Searching</option>
            <option>Sorting</option>
            <option>2 pointers</option>
            <option>Hashing</option>
            <option>Sliding Window</option>
            <option>Linked List</option>
            <option>Recursion</option>
            <option>Tree</option>
        </select>
        <input type="submit"/>
     </form>
    </div>
  )
}

export default AskDoubt