import { useState } from "react";

const AddUser = () => {
  let [userList, setUserList] = useState([]);
  let [newUser, setNewUser] = useState({
    fullName: "",
  }); // string number boolean array object

  let inputChange = (event) => {
    // get value of input => event.target.value
    let { value } = event.target;
    console.log("changed", value);
  };
  let saveUser = (event) => {
    event.preventDefault();
    console.log("submit click");
  };
  return (
    <>
      <section className="card p-3">
        <p className="text-center fw-bold text-primary h4">Add New User</p>
        <form onSubmit={saveUser}>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control"
              onChange={inputChange}
            />
          </div>
          <div className="d-flex gap-4 justify-content-center">
            <button className="btn btn-success w-50">Save</button>
            <button className="btn btn-outline-danger w-50">Reset</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddUser;
