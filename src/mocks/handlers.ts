import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, resp, cont) => {
    return resp(
      cont.status(200),
      cont.json([
        {
          name: "Leanne Graham",
        },
      ])
    );
  }),
];
