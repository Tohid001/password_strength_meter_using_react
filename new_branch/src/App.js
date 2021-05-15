import React, { useState, useEffect } from "react";

function App() {
  const [postId, setPostId] = useState("");
  const [data, setData] = useState({});
  const [buttonId, setButtonId] = useState("");
  const handleClick = () => {
    setButtonId(postId);
  };
  const handleChange = (e) => {
    setPostId(e.target.value);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, [buttonId]);
  return (
    <div>
      <ul>
        <li>
          <input type="text" value={postId} onChange={handleChange} />
          <button type="button" onClick={handleClick}>
            show title
          </button>
        </li>
        <li>{data.title}</li>
      </ul>
    </div>
  );
}

export default App;
