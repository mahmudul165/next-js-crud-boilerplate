import { users } from "../../../data/users";

export default function handler(req, res) {
  const { userId } = req.query;
  if (req.method === "GET") {
    // console.log("ur id", userId);
    const user = users.find((user) => user.id == parseInt(userId));
    res.status(200).json(user);
  } else if (req.method === "DELETE") {
    const deleteUser = users.find((user) => user.id == parseInt(userId));
    console.log(deleteUser, "delete the data");
    const index = users.findIndex((user) => user.id == parseInt(userId));
    users.splice(index, 1);
    res.status(200).json(deleteUser);
  }
}
