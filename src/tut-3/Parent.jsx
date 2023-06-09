import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "#fff" }}>
        Hello this Parent component
      </h1>
      <Child parent="Parent XYZ" />
    </div>
  );
};

export default Parent;
