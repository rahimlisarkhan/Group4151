const carList = document.querySelector("#carList");
const errorAlert = document.querySelector("#errorAlert");
const loadingEl = document.querySelector("#loadingEl");

showLoading(true);
myPromises
  .then((res) => {
    console.log(res.result.data);

    renderCars(res.result.data);
    showErrorMessage("", false);
  })
  .catch((err) => {
    console.log(err);
    showErrorMessage(err.message, true);
  })
  .finally(() => {
    showLoading(false);
  });

function renderCars(arr) {
  carList.innerHTML = arr
    .map(
      (car) => `
  <div class="card" style="width: 18rem">
          <img
            height="200"
            style="object-fit:cover"
            src="${car.imgUrl}"
            alt="${car.title}"
          />
          <div class="card-body">
            <h5 class="card-title">${car.title}</h5>
            <p class="card-text">${car.price}$</p>
            <div class="text-warning">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <a href="{${car.link}}" target="_blank" class="btn btn-danger pull-right">Read more</a>
          </div>
        </div>`
    )
    .join("");
}

function showErrorMessage(mes, show) {
  errorAlert.innerHTML = mes;
  if (show) {
    errorAlert.classList.add("d-block");
    errorAlert.classList.remove("d-none");
    return;
  }

  errorAlert.classList.add("d-none");
  errorAlert.classList.remove("d-block");
}

function showLoading(show) {
  if (show) {
    loadingEl.classList.add("d-block");
    loadingEl.classList.remove("d-none");
    return;
  }

  loadingEl.classList.add("d-none");
  loadingEl.classList.remove("d-block");
}

//? https://92.104.321:443/course/frontend?ders=topic5&tapsiriq=8

//? https://course.az/course/frontend?ders=topic5&tapsiriq=8

//? https://school.eacampschool.com/course/view.php?id=7&section=8

//? http://omdb.com/movie?t=titanic&year=1990

const myPromises = null;
