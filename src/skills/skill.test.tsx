import { render, screen,logRoles } from "@testing-library/react";
import Skill from "./Skill";

describe("Skills Map", () => {
  const skills = ["HTML", "CSS", "JS"];
  it("skills renders correctls", () => {
    render(<Skill skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders a skill of list", () => {
    render(<Skill skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("renders login button", () => {
    render(<Skill skills={skills} />);
    const loginBtn = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginBtn).toBeInTheDocument();
  });

  it("start learning button is not rendered", () => {
    render(<Skill skills={skills} />);
    const startBtn = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startBtn).not.toBeInTheDocument();
  });

  it("start learning button renders in DOM", async () => {
    const view=render(<Skill skills={skills} />);
    // screen.debug()
    logRoles(view.container)
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug()
    expect(startLearningBtn).toBeInTheDocument();
  });
});
