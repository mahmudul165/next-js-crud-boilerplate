import { users } from "../../../data/users";

export default function handler(req, res) {
  //const { userId } = req.query;
  //console.log(userId, "user id");
  if (req.method === "GET") {
    // const user = users.find((user) => user.id == parseInt(userId));
    res.status(200).json(users);
  }
  //else if (req.method === "GET") {
  //     console.log("ur id", userId);
  //     const user = users.find((user) => user.id == parseInt(userId));
  //     res.status(200).json(user);
  //   }
  else if (req.method === "POST") {
    const user = req.body;
    console.log(user);
    const newUser = {
      id: Date.now(),
      name: user,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  }

  //   else if (req.method === "DELETE") {
  //     const deleteUser = users.find((user) => user.id == parseInt(userId));
  //     console.log(deleteUser, "delete the data");
  //     const index = users.findIndex((user) => user.id == parseInt(userId));
  //     users.splice(index, 1);
  //     res.status(200).json(deleteUser);
  //   }
}
