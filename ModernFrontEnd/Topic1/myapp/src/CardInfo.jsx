export const CardInfo = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80";

  const title = "Izzet Card";

  return (
    <div>
      <img width="200" src={imgUrl} />
      <h1>{title}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptatibus, maxime ullam pariatur voluptate neque mollitia illo atque
        veritatis quis in doloribus nulla non at? Officiis sed provident
        repellat nam?
      </p>
    </div>
  );
};

// export default CardInfo;
