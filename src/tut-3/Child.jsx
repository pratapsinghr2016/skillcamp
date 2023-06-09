const Child = ({ parent }) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Hello this Child component</h1>
      <h2>My parent name is {parent}</h2>
    </div>
  );
};

export default Child;
