import Greet from "./greet/Greet";
import { render, screen } from "@testing-library/react";

//simple test
// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

// test("Greet renders a prop name correctly", () => {
//   render(<Greet name="Vishwas" />);
//   const textElement = screen.getByText("Hello Vishwas");
//   expect(textElement).toBeInTheDocument();
// });

//grouping test
// describe("GreetName", () => {
//   test("Greet renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument();
//   });

//   test("Greet renders a prop name correctly", () => {
//     render(<Greet name="Vishwas" />);
//     const textElement = screen.getByText("Hello Vishwas");
//     expect(textElement).toBeInTheDocument();
//   });
// });

//nested grouping test
describe("GreetName", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested Freet", () => {
    test("Greet renders a prop name correctly", () => {
      render(<Greet name="Vishwas" />);
      const textElement = screen.getByText("Hello Vishwas");
      expect(textElement).toBeInTheDocument();
    });
  });
});
