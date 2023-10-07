import { Navbar } from "./Navbar";
import mainImage from "./assets/images/maxresdefault.jpeg";

export const Header = () => {
  return (
    <header className="header">
      <h1>REACT APP Aziz </h1>
      <Navbar />

      <img width={300} src={mainImage} />
    </header>
  );
};
