import * as React from "react";

type Props = {
  handleFetchRequest: () => void;
  shouldFetch: boolean;
};

const ChildApp = ({ handleFetchRequest, shouldFetch }: Props) => {
  React.useEffect(() => {
    if (shouldFetch) handleFetchRequest();
  }, [shouldFetch, handleFetchRequest]);

  return (
    <div>
      <h1>Child App</h1>
      <p>
        I will load data using a default <b>useState(true)</b>
        <br />
        this should cause another fetch call to be triggered.
      </p>
      <h2>Should load more data: {JSON.stringify(shouldFetch)}</h2>
    </div>
  );
};

export default ChildApp;
