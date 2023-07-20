import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

describe("GreetName", () => {
    it("Greet renders correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText(/hello/i);
      expect(textElement).toBeInTheDocument();
    });
    describe("Nested Freet", () => {
      xit("Greet renders a prop name correctly", () => {
        render(<Greet name="Vishwas" />);
        const textElement = screen.getByText("Hello Vishwas");
        expect(textElement).toBeInTheDocument();
      });
    });
  });