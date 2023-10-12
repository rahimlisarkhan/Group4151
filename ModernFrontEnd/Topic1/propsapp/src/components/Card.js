export const Card = ({
  imageUrl,
  isNew = true,
  title = "Test title",
  price = 1,
  className,
  classNameTitle,
  otherInfo = { company: "Ne alsan", year: 2023 },
}) => {
  //   console.log("props", props);

  //   const {
  //     imageUrl,
  //     isNew,
  //     title,
  //     price,
  //     className,
  //     classNameTitle,
  //     otherInfo,
  //   } = props;

  return (
    <div className={className}>
      <hr />
      <img width={100} src={imageUrl} />
      <h2 className={classNameTitle}>{title}</h2>
      <h3>{isNew ? "Yeni" : "Islenmis"}</h3>
      <h4>Qiymeti:{price} manat</h4>
      {/* <h5>Istehsalci {otherInfo?.company || "Yoxdur"}</h5> */}
      <h5>Istehsalci {otherInfo?.company ?? "Yerli"}</h5>
      <h6>Islehsalci ili: {otherInfo?.year}</h6>
      <hr />
    </div>
  );
};
