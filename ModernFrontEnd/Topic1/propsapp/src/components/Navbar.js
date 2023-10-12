import { RegisterButtonGroup } from "./Register";

export const Navbar = (props) => {
  console.log("Navbarin Propsu", props);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>

      <RegisterButtonGroup online={props.onlineCount} />
    </nav>
  );
};
