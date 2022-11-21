import * as React from "react";
// import ChildApp from "./ChildApp";
import ChildApp from "./ChildApp2";

const getData = async () => {
  console.log("fetching data");
  await fetch("./data.json"); // ignore the data
};

const App = () => {
  const [shouldFetch] = React.useState<boolean>(true);

  React.useEffect(() => {
    getData();
  }, []);

  const handleFetchRequest = () => getData();

  return (
    <div>
      <h1>Main App</h1>
      <p>I will load data on initial load from a local file</p>
      <ChildApp {...{ handleFetchRequest, shouldFetch }} />
    </div>
  );
};

export default App;
