// const a = {
//   tut: function (el) {
//     this.elDunyanur = document.querySelector(el);
//     return this;
//   },

//   hide: function () {
//     this.elDunyanur.style.display = "none";

//     return this;
//   },

//   html: function (text) {
//     this.elDunyanur.innerHTML = text.join("");
//   },
// };

// a.tut("p").hide();

// // a.tut(".container").hide();

// const content = data.map((item) => `${item}`);
// a.tut(".container").html(content);

// let obj = {};

// obj.elDunyanur = 55;

const h1El = $("h1");
const el = $("<p>")
  .text("Lorem ipsum")
  .css({
    color: "red",
    // backgroundColor: "yellow",
    "background-color": "yellow",
    padding: 20,
  })
  .attr("id", "mustafa");

$("body").prepend(el);

// h1El.click(function () {
//   console.log("clickme");
// });

// $(document).click(".btn", function () {
//   console.log("clickme");
// });

// $(document).mouseenter(".btn", function () {
//   console.log("clickme");
// });

$(document).on("click", ".btn", function () {
  // const value = this.innerText;
  const value = $(this).text();
  console.log("clickme", value);

  h1El.toggle(200);
});

// $(document).addEventListener("click", function () {
//   console.log("clickme");
// });
// console.log(h1El.html("<span>Text</span>"));

// const inputEl = parseInt($("input").val());
const inputEl = $("input").val("1002");

console.log(inputEl);

$(document).on("click", "#showBtn", function () {
  console.log("test...");

  // $(".panel").fadeToggle(1000);
  $(".panel").animate({ top: "200px", fontSize: "40px" });
});
