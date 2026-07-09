function Counter() {
  let count = 0;

  function increase() {
    count = count + 1;
    console.log("Count:", count);
  }

  return (
    <div>
      <h2>Counter Example</h2>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;