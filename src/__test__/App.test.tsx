import * as React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("should render the component", () => {
    it("should render", () => {
        // @ts-ignore-next-line
        global.fetch = jest.fn(() => Promise.resolve({
            ok: true,
        }));

        render(<App />);

        expect(global.fetch).toHaveBeenCalledTimes(2);

    })
})