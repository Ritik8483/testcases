import { screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import { render } from "../test-utils";

describe("Mui MODE TESTS",()=>{
    it("renders mui mode text correctly", () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
      });
    
})