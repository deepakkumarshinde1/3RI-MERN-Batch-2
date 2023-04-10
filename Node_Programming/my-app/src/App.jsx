import ChangeTextClass from "./components/ChangeTextClass";

const App = () => {
  let text = "india is my country";
  let text2 = "today is monday";
  return (
    <>
      <center>
        <h1 className="text-success display-1 fw-bold">Hello</h1>
        <ChangeTextClass text={text} number="1" />
        <div className="my-5"></div>
        <ChangeTextClass text={text2} number="10" />
      </center>
    </>
  );
};

export default App;
