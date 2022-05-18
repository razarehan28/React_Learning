import React, { useState, useEffect } from "react";

function HookCounterone() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')
  useEffect(() => {
    console.log("useEffect-updating document title")
    document.title = `You clicked ${count} time`;
  });
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>count{count} times</button>
    </div>
  );
}

export default HookCounterone;
