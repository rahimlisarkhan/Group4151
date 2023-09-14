$(document).ready(() => {
  const renderNews = (arr) => {
    const content = arr.map((news) => {
      return `<div class="col-md-12">
                <div class="card mb-5">
                    <img style="height:400px; object-fit: cover;"
                        src="https://www.nytimes.com/${news?.multimedia[0]?.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${news?.abstract}</h5>
                        <p class="card-text">${news?.lead_paragraph}</p>
                    </div>
                    <a href="${news?.web_url}" target="blank" class="btn btn-danger">Read More</a>
                </div>
            </div> `;
    });

    $("#newsList").html(content);
  };

  const getFormInfo = () => {
    let sort = $("#sortNews").val();
    let end_date = $("#endDateNews").val();
    let begin_date = $("#startDateNews").val();
    let q = $("#titleNews").val();

    let formData = {
      q,
      sort,
      begin_date,
      end_date,
      "api-key": "UHjXuuGPzFMGII97B8c5RmJDSomaEELG",
    };

    return formData;
  };

  $("#searchNews").on("click", (e) => {
    e.preventDefault();
    let form = getFormInfo();

    console.log(form, "form");
    getNews(form);
  });

  // API
  const getNews = (data) => {
    $.ajax({
      method: "GET",
      data,
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    })
      .then((info) => {
        console.log(info);
        renderNews(info.response.docs);
      })
      .catch((err) => {
        alert("err", err.responseJSON.errors[0]);
      });
  };
});
