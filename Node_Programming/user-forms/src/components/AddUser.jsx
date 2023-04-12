import { useState } from "react";

const AddUser = () => {
  let initialDetails = { fullName: "", mobile: "", gender: "", city: "" };
  let [userList, setUserList] = useState([]);
  let [newUser, setNewUser] = useState({ ...initialDetails }); // string number boolean array object

  let inputChange = (event) => {
    // get value of input => event.target.value

    // primitive & non-primitive
    let { value, name } = event.target;
    console.log(name);
    // let _newUser = { ...newUser };
    // _newUser[name] = value;
    // setNewUser(_newUser);
    setNewUser({ ...newUser, [name]: value });
  };
  let saveUser = (event) => {
    event.preventDefault();
    console.log("submit click");

    // let _userList = [...userList];
    // _userList.push({ ...newUser });
    // setUserList(_userList);

    setUserList([...userList, { ...newUser }]);
    setNewUser({ ...initialDetails });
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
              name="fullName"
              value={newUser.fullName}
              onChange={inputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="form-control"
              name="mobile"
              value={newUser.mobile}
              onChange={inputChange}
            />
          </div>
          <div className="d-flex mb-2">
            <label htmlFor="">Gender</label>
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="radio"
                value="Male"
                id="flexCheckDefault"
                name="gender"
                checked={newUser.gender === "Male" ? true : false}
                onChange={inputChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Male
              </label>
            </div>
            <div className="form-check ms-2">
              <input
                className="form-check-input"
                type="radio"
                value="Female"
                id="flexCheckChecked"
                name="gender"
                onChange={inputChange}
                checked={newUser.gender === "Female" ? true : false}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Female
              </label>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <select
              value={newUser.city}
              className="form-select"
              name="city"
              onChange={inputChange}
            >
              <option value="">Select</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
            </select>
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
