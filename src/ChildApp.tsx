import * as React from "react";

type Props = {
  handleFetchRequest: () => void;
  shouldFetch: boolean;
};

const ChildApp = ({ handleFetchRequest, shouldFetch }: Props) => {
  React.useEffect(() => {
    /*
     * use  `setInterval` and the test will fail. 
     * The number of fetch calls are 1 instead of 2. 
     * That's incorrect since the child will trigger 
     * the second fetch call
     */
    // setInterval(() => {
    //   if (shouldFetch) handleFetchRequest();
    // });

    /**
     * don't use setInterval and the test will pass
     * There are indeed two fetch calls. 
     */
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
