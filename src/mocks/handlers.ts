// import { rest } from "msw";

// export const handlers = [
//   rest.get("https://jsonplaceholder.typicode.com/users", (req, resp, cont) => {
//     return resp(
//       cont.status(200),
//       cont.json([
//         {
//           name: "Leanne Graham",
//         },
//       ])
//     );
//   }),

//   rest.post("/login", (req, res, ctx) => {
//     return res(
//       ctx.status(201),
//       ctx.json({
//         name: "Added name",
//       })
//     );
//   }),
// ];

import { rest } from "msw";

let users = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  },
  { id: 2, name: "qui est esse" },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, resp, cont) => {
    return resp(
      cont.status(200),
      cont.json([
        {
          name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
      ])
    );
  }),

  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: "Added name",
      })
    );
  }),

  rest.delete(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (req, res, ctx) => {
      const { id }: any = req.params;
      users = users.filter((u:any) => u.id !== parseInt(id));
      return res(
        ctx.status(200),
        ctx.json({ message: "Added name" })
      );
    }
  ),
];
