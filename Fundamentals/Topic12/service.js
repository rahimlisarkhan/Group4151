//? API - Application Programing Interface

//? CRUD

//? CREATE - POST
//? READ - GET
//? UPDATE - PUT
//? DELETE - DELETE

const baseUrl = "https://blog-api-t6u0.onrender.com";

const getPosts = async () => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
};
// const form = '{ name: "dasda", age: 2323 }';

const addPost = async (form) => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const uptPost = async (id, form) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log("data", data);

    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const rmvPost = async (id) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "DELETE",
    });

    const data = await response.json();

    console.log("data", data);

    return data;
  } catch (err) {
    console.log("err", err);
  }
};

//? USE
// getPosts();
// addPost({ title: "Post3", body: "Lorem ipsum" });
// uptPost(112, { title: "Post3", body: "Lorem ipsum ipsum ipsum" });

// rmvPost(109);
