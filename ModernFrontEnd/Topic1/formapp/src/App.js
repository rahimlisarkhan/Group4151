import { useState } from "react";

const initialForm = {
  fullname: "",
  age: "",
  position: "",
};

function App() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const callback = (prevForm) => {
    //   const newForm = { ...prevForm, [name]: value };

    //   return newForm;
    // };

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    // const newData = [...data];
    // newData.unshift(form);

    // setData(newData);

    setData((prevData) => [form, ...prevData]);

    setForm(initialForm);

    // setData((prevData) => [...prevData, form]);
  };

  const handleRmvItem = (i) => {
    console.log("i", i);
    // const newData = data.filter((item, index) => index !== i);

    // setData(newData);
    setData((prevData) => prevData.filter((item, index) => index !== i));
  };

  const disableBtn =
    !form.fullname?.trim() || !form.position?.trim() || !form.age?.trim();

  return (
    <div className="App">
      <div className="d-flex">
        {/* Form */}
        <div className="bg-danger w-25 p-3" style={{ minHeight: "100vh" }}>
          <h1 className="text-white h5">Personal</h1>
          <div className="d-flex flex-column gap-4 ">
            <input
              className="form-control"
              name="fullname"
              placeholder="Fullname"
              value={form?.fullname}
              onChange={handleChange}
            />
            <input
              className="form-control"
              name="age"
              placeholder="Age"
              value={form?.age}
              onChange={handleChange}
            />
            <input
              className="form-control"
              name="position"
              placeholder="Position"
              value={form?.position}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={disableBtn}
            >
              Send
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="w-75">
          <div className="h3 text-center"> Table </div>
          <div className="table-content p-4">
            <table className="table table-striped">
              <tr className="bg-danger text-white border">
                <th className="p-2">Fullname</th>
                <th>Age</th>
                <th>Position</th>
              </tr>

              {data?.map((item, index) => {
                return (
                  <tr className="border" key={"tr" + index}>
                    <td className="p-2">{item?.fullname}</td>
                    <td>{item?.age}</td>
                    <td>
                      {item?.position}
                      <button
                        className="btn btn-danger ms-4"
                        onClick={() => handleRmvItem(index)}
                      >
                        sil
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const props = {

//   showText: () => {
//     console.log("text...");
//   },
// };

// const myObj = {
//   name:"Ramal"
// }

// myObj.age=34

//? myObj["positon"]="Developer"

// const myObj = {
//   name:"Test"
// }

// myObj.age="34"
