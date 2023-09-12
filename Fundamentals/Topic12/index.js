console.log("getPosts", getPosts);

let fullname;
let avatar;

// let currentPost = {};

const work = () => {
  const panelEl = $("#panel");

  fullname = prompt("Zehmet olmasa mutleq adinizi yazin");
  avatar = prompt("Zehmet olmasa avatar seklinizi qoyun");

  if (!fullname.trim()) {
    alert("Adinizi yazmadiginiza gore sisteme daxil olmur!");
    return;
  }

  panelEl.removeClass("d-none");
  renderPosts();
};

async function renderPosts() {
  try {
    const postsEl = $("#posts");
    const data = await getPosts();

    const content = data.reverse().map((post) => {
      const createdTime = convertTime(post.created);

      return `
    <div class="card shadow">
    <img
      src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
      class="card-img-top"
      style="object-fit: cover"
      height="300"
      alt="${post.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">
      ${post.body}
      </p>
      <h6 class="card-subtitle mt-4 mb-3 text-muted">${createdTime}</h6>
      <div class="d-flex align-items-center gap-2">
        <img
          class="rounded-circle shadow"
          width="50"
          height="50"
          style="object-fit: cover"
          src="${
            post.avatar
              ? post.avatar
              : "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg"
          }"
        />
        <p class="h6">${
          post.fullname ? post.fullname : "Anonim"
        }</p> <button class="btn btn-danger remove-btn" value="${
        post.id
      }">DEL </button>
      </div>
    </div>
  </div>
    `;
    });

    postsEl.html(content);
  } catch (err) {
    console.log("err", err);

    console.log("Network error");
  }
}

$(document).on("click", "#shareBtn", async function () {
  try {
    const title = $("#postInput").val().trim();
    const body = $("#postBodyInput").val().trim();

    const newPostData = {
      title,
      body,
      fullname,
      avatar,
      created: new Date(),
    };

    console.log("newPostData", newPostData);

    await addPost(newPostData);

    renderPosts();

    $("#postInput").val("");
    $("#postBodyInput").val("");
  } catch (err) {
    console.log("er", err);
  }
});

$(document).on("click", ".remove-btn", async function () {
  try {
    const id = $(this).val();
    console.log("id", id);

    await rmvPost(id);

    renderPosts();
  } catch (err) {}
});

work();
