import { Card } from "./components/Card";
import { Header } from "./components/Header";

const listAbout = ["List 1", "List 2", "List3", "List4"];

const info = {
  company: "Arcelik",
  year: 2022,
};

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Header onlineUserCount={5} />
      <Card
        imageUrl="https://m.media-amazon.com/images/I/41gLY7Ecj5L.jpg"
        price={3999}
        title="Monitor"
        isNew={true}
        className="card-bg"
        classNameTitle="text-danger"
        about={listAbout}
        otherInfo={info}
      />
      <Card
        price={25.9}
        title="Utu"
        isNew={false}
        imageUrl="https://texnomart.az/wp-content/uploads/2021/10/texnomart-utu-h54a32rwqcb86ylsiuzk.jpg"
        className="card-bg"
        classNameTitle="text-danger"
        otherInfo={{ company: "Borsh", year: 2023 }}
      />
    </div>
  );
}

export default App;
