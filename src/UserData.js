import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default () => {
  const [userList, setUserList] = useState([]);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [phoneNumber, setUserPhoneNumber] = useState(0);
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(-1);
  const [editObject, setEditObject] = useState({});
  const [userObject, setUserObject] = useState({
    userFirstName: "",
    userLastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const FetchData = () => {
    axios.get("http://localhost:8080/user/getAll").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setUserList(response.data);
      }
    });
  };

  useEffect(() => {}, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!isEditMode) {
      axios
        .post("http://localhost:8080/user/add", {
          ...userObject,
        })
        .then((response) => {
          console.log(response);
          alert("Added");

          setUserObject({
            userFirstName: "",
            userLastName: "",
            dateOfBirth: "",
            phoneNumber: "",
            email: "",
            password: "",
          });
          FetchData();
        });
    }
  };

  const onDeleteHandler = (userId) => {
    axios
      .delete("http://localhost:8080/user/delete/" + userId)
      .then((response) => {
        console.log(response);
        alert("Deleted");
        FetchData();
      });
  };

  const onEdit = (userObject) => {
    console.log(userObject);
    setUserFirstName(userObject.userFirstName);
    setUserLastName(userObject.userLastName);
    setUserPhoneNumber(userObject.phoneNumber);
    setUserEmail(userObject.email);
    setUserPassword(userObject.password);
    setDateOfBirth(userObject.dateOfBirth);
    setUserId(userObject.userId);
    setSelectedUserId(userObject.userId);
    setEditObject({
      ...userObject,
    });
  };

  const onEditObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };
  const onUserObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setUserObject({
        ...userObject,
        [name]: value,
      });
    }
  };

  const onResetRowHandler = () => {
    setSelectedUserId(-1);
    setEditObject({
      userFirstName: "",
      userLastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      password: "",
    });
  };
  const onUpdateRow = () => {
    if (userId > 0) {
      axios
        .put("http://localhost:8080/user/update/" + userId, {
          userId: userId,

          ...editObject,
        })
        .then((response) => {
          if (response) {
            FetchData();
            alert("updated");
            onResetRowHandler();
          }
        });
    }
  };

  return (
    <>
      <h1 className="text-center">From User</h1>
      <form className="container" onSubmit={onFormSubmit}>
        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            User First Name
          </label>
          <input
            id="name"
            className="form-control"
            name="userFirstName"
            value={userObject.userFirstName}
            onChange={onUserObjectChangeHandler}
            placeholder="Please Enter Your Name"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            User Last Name
          </label>
          <input
            id="name"
            className="form-control"
            name="userLastName"
            value={userObject.userLastName}
            onChange={onUserObjectChangeHandler}
            placeholder="Please Enter Your last Name"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="sourcelocation" className="form-label">
            Phone Number
          </label>
          <input
            id="sourcelocation"
            className="form-control"
            name="phoneNumber"
            value={userObject.phoneNumber}
            onChange={onUserObjectChangeHandler}
            placeholder="Please Enter Your Phone Number"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="destinationlocation" className="form-label">
            Email
          </label>
          <input
            id="destinationLocation"
            className="form-control"
            name="email"
            value={userObject.email}
            onChange={onUserObjectChangeHandler}
            placeholder="Please EnterYour Email"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="departuredatetime" className="form-label">
            Date Of Birth
          </label>
          <input
            id="departuredatetime"
            className="form-control"
            type="date"
            name="dateOfBirth"
            placeholder="Please EnterYour Date Of Birth"
            value={userObject.dateOfBirth}
            onChange={onUserObjectChangeHandler}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="arrivaldatetime" className="form-label">
            password
          </label>
          <input
            id="arrivaldatetime"
            className="form-control"
            placeholder="Please EnterYour Password"
            name="password"
            value={userObject.password}
            onChange={onUserObjectChangeHandler}
          />
        </div>

        <br />
        <div className="col-md-5">
          <button type="submit" className="btn btn-success">
            {isEditMode ? "update" : "submit"}
          </button>
          {isEditMode && <button>Rest:</button>}
        </div>
      </form>
      <h1>User List</h1>
      <table className="table table-bordered border border-info">
        <thead>
          <tr className="table">
            <th>UserId</th>
            <th>UserFirstName</th>
            <th>UserLastName</th>
            <th>phoneNumber</th>
            <th>dateOfBirth</th>
            <th>Password</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="userFirstName"
                      value={editObject.userFirstName}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.userFirstName
                  )}
                </td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="userLastName"
                      value={editObject.userLastName}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.userLastName
                  )}
                </td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="phoneNumber"
                      value={editObject.phoneNumber}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.phoneNumber
                  )}
                </td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="dateOfBirth"
                      value={editObject.dateOfBirth}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.dateOfBirth
                  )}
                </td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {selectedUserId === user.userId ? (
                    <input
                      name="password"
                      value={editObject.password}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.password
                  )}
                </td>

                <td>
                  {selectedUserId === user.userId ? (
                    <>
                      <button className="btn btn-info" onClick={onUpdateRow}>
                        Update
                      </button>
                      <button onClick={onResetRowHandler}> Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          onDeleteHandler(user.userId);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-btn-secondary"
                        onClick={() => {
                          onEdit(user);
                        }}
                      >
                        Edit:
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
