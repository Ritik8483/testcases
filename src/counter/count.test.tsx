import { render, screen } from "@testing-library/react";
import Count from "./Count";
import userEvent from "@testing-library/user-event";

describe("COUNTER APP TESTS", () => {
  it("ALL ITEMS RENDERS CORRECTLY", () => {
    render(<Count />);
    const countNumber = screen.getByRole("heading");
    expect(countNumber).toBeInTheDocument();

    const countBtnElement = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(countBtnElement).toBeInTheDocument();
  });

  it("Renders By default count 0", () => {
    render(<Count/>)
    const countNumber = screen.getByRole("heading");
    expect(countNumber).toHaveTextContent("0");
  });

  it("Renders count of 1 after clicking the increment button", async() => {
    render(<Count/>)
    const incrementBtn = screen.getByRole("button",{
        name:"Increment" 
    });
    await userEvent.click(incrementBtn);
    const countElement=screen.getByRole('heading');
    expect(countElement).toHaveTextContent("1");
  });
});
