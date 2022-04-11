import React, { useEffect, useState } from "react";

const BackEnd = () => {
  const [users, setUser] = useState([]);
  const [value, setValue] = useState("");
  //   useEffect(
  //     () =>
  //       // GET Request.
  //       fetch("http://localhost:3000/api/users")
  //         // Handle success
  //         .then((response) => response.json()) // convert to json
  //         .then((data) => setUser(data)),
  //     [users]
  //   );
  console.log(users[0]);
  const loadAllData = () => {
    fetch("/api/users")
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((data) => setUser(data));
  };
  const addUser = () => {
    // console.log(value);
    fetch("/api/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });

    loadAllData();
  };
  const deleteUser = (id) => {
    console.log(id);
    fetch(`/api/users/${id}`, {
      method: "DELETE", // or 'PUT'
    });
    loadAllData();
  };
  return (
    <div className="p-5 m-5">
      <h1>All Users Data</h1>
      <hr />
      <div className="my-5">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={addUser}>Add User</button>
      </div>
      <button className="btn btn-warning" onClick={loadAllData}>
        Load all data
      </button>
      {users.map((user) => {
        return (
          <div key={user.id} className="d-flex gap-2 my-5">
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BackEnd;
