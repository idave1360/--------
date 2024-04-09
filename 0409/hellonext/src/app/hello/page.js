import World from "./world";
import Counter from "../counter/page";

// http://localhost:3001/hello
export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="Next" />!
      </h1>

      <img src="https://picsum.photos/536/354" />

      <p>
        <Counter />
      </p>
    </>
  );
}
