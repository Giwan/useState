import * as React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

type Props = {
    handleFetchRequest: () => void;
    shouldFetch: boolean;
};

const ChildApp2 = ({ handleFetchRequest, shouldFetch: hasNextPage }: Props) => {

    const infiniteRef = useInfiniteScroll<HTMLDivElement>({
        loading: false,
        hasNextPage,
        onLoadMore: handleFetchRequest
    })

    return (
        <div ref={infiniteRef}>
            <h1>Child App</h1>
            <p>
                I will load data using a default <b>useState(true)</b>
                <br />
                this should cause another fetch call to be triggered.
            </p>
            <h2>Should load more data: {JSON.stringify(hasNextPage)}</h2>
        </div>
    );
};

export default ChildApp2;
