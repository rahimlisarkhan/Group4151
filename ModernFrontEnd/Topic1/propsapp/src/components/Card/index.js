import styles from "./Card.module.css";

export const Card = ({
  imageUrl,
  isNew = true,
  title = "Test title",
  price = 1,
  className,
  classNameTitle,
  otherInfo = { company: "Ne alsan", year: 2023 },
}) => {
  const isShow = false;

  // console.log("props", props);

  // const {
  //   imageUrl,
  //   isNew,
  //   title,
  //   price,
  //   className,
  //   classNameTitle,
  //   otherInfo,
  // } = props;

  return (
    <div className={className}>
      <hr />

      <img width={100} src={imageUrl} />
      <h2 className={classNameTitle}>{title}</h2>
      <h3 className={styles.title}>{isNew ? "Yeni" : "Islenmis"}</h3>
      {/* <h4 className={styles.price}>Qiymeti:{price} manat</h4> */}
      <h4 className={`${styles.price} ${isShow ? styles.price_bg : ""}`}>
        Qiymeti:{price} manat
      </h4>

      {/* <h5>Istehsalci {otherInfo?.company || "Yoxdur"}</h5> */}
      <h5 className="text-primary">
        Istehsalci {otherInfo?.company ?? "Yerli"}
      </h5>
      <h6>Islehsalci ili: {otherInfo?.year}</h6>
      <hr />
    </div>
  );
};
