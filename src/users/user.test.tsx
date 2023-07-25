
import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("User API tests", () => {
  it("renders Users correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(textElement).toBeInTheDocument();
  });

  it("renders a list of users",async ()=>{
    render(<Users />);
    const users=await screen.findAllByRole('listitem');
    expect(users).toHaveLength(1)
  })
});

