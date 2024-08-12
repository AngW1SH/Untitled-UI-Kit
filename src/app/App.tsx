import { ToggleVisibility } from "../common/ToggleVisibility";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        paddingTop: "70vh",
      }}
    >
      <ToggleVisibility trigger={<p>Open</p>}>
        <div>
          <p>123</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      </ToggleVisibility>
    </div>
  );
}

export default App;
