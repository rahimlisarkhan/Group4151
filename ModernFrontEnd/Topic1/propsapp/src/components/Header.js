import { Navbar } from "./Navbar";

export const Header = (props) => {
  console.log("Headerin Propsu", props);

  return (
    <header>
      <div>Logo content</div>
      <Navbar onlineCount={props.onlineUserCount} />
    </header>
  );
};
