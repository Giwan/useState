import * as React from "react"; 
import { render } from "@testing-library/react"; 
import App from "../App";

describe("should render the component", () => {
    it("should render", () => {
        global.jest = jest.fn(); 
        
        const { container } = render(<App />); 

        expect(global.jest).toHaveBeenCalledTimes(1);

    })
})