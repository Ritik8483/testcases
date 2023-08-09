// import { fireEvent, render, screen } from "@testing-library/react";
// import Users from "./Users";
// import { server } from "../mocks/server";
// import { rest } from "msw";

// describe("User API tests", () => {
//   it("renders Users correctly", () => {
//     render(<Users />);
//     const textElement = screen.getByRole("heading", {
//       name: "Users",
//     });
//     expect(textElement).toBeInTheDocument();
//   });

//   it("renders a list of users", async () => {
//     render(<Users />);
//     const users = await screen.findAllByRole("listitem");
//     expect(users).toHaveLength(1);
//   });

//   test("renders User and handles the POST API response", async () => {
//     render(<Users />);
//     const submitButton = screen.getByText("Submit");
//     expect(submitButton).toBeInTheDocument();

//     fireEvent.click(submitButton);
//     const responseText = await screen.findByText(
//       "Added name",
//       {},
//       { timeout: 2000 }
//     );
//     expect(responseText).toBeInTheDocument();
//   });

//   test("render ERROR", async () => {
//   server.use(
//     rest.get(
//       "https://jsonplaceholder.typicode.com/users",
//       (req, res, ctx) => {
//         return res(ctx.status(500));
//       }
//     )
//   );
//   render(<Users />);
//   const error = await screen.findByText("Error fetching users");
//   expect(error).toBeInTheDocument();
// });
// });

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("User API tests", () => {
  it("renders Users correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(textElement).toBeInTheDocument();
  });

  it("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(1);
  });

  test("renders User and handles the POST API response", async () => {
    render(<Users />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    const responseText = await screen.findByText(
      "Added name",
      {},
      { timeout: 2000 }
    );
    expect(responseText).toBeInTheDocument();
  });

  test("renders delete button and handles the delete API response", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(1);
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    await waitFor(() => {
      const deletedPostTitle = screen.queryByText(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(deletedPostTitle).toBeNull();
    });
  });

  test("renders update button and handles the update API response", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(1);
    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);
    const updatedPostTitle = await screen.findByText("Updated Post Title");
    const updatedPostBody = await screen.findByText("Updated body of Post 1.");
    expect(updatedPostTitle).toBeInTheDocument();
    expect(updatedPostBody).toBeInTheDocument();
  });
});
