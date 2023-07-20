import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application tests", () => {
  it("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job Application Form",
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText("Name");
    // expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Ritik");
    expect(nameElement4).toBeInTheDocument();

    const paragraphElement = screen.getByText("All Fields are mandatory"); //full String Match
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement1 = screen.getByText("all fields are mandatory", {
      exact: false,
    }); //use exact false
    expect(paragraphElement1).toBeInTheDocument();

    const paragraphElement2 = screen.getByText("l fields are mandato", {
      exact: false,
    }); //use exact false
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText((content) =>
      content.startsWith("All")
    ); //custom function
    expect(paragraphElement3).toBeInTheDocument();

    const selectorNameElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(selectorNameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const countryElement = screen.getByRole("combobox");
    expect(countryElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
});
