import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Marcus" },
    { id: 2, name: "Arthur" },
    { id: 3, name: "Guilherme" },
  ];

  return response.json(users);
};
