import AddUser from "./AddUser";

const User = () => {
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-10 mt-3">
          <p className="text-center">Welcome to User Management System</p>
          <AddUser />
        </section>
      </section>
    </>
  );
};

export default User;
