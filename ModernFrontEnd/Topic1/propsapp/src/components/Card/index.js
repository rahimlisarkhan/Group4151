import { useState } from "react";
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
  const [count, setCount] = useState(1);
  const [readMore, setReadMore] = useState(false);

  const isShow = false;

  const totalAmount = (price * count).toFixed(2);

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
      <button
        // disabled={count == 0}
        disabled={!count}
        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        Azalt
      </button>

      <span>{count}</span>
      {/* <button onClick={() => setCount(count + 1)}>Artir</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Artir</button>
      <h4 className={styles.price}>Qiymeti:{price} manat</h4>
      <h4 className={styles.price}>Umumi qiymet:{totalAmount} manat</h4>
      {/* <h4 className={`${styles.price} ${isShow ? styles.price_bg : ""}`}>
        Qiymeti:{price} manat
      </h4> */}

      {/* <h5>Istehsalci {otherInfo?.company || "Yoxdur"}</h5> */}
      <h5 className="text-primary">
        Istehsalci {otherInfo?.company ?? "Yerli"}
      </h5>
      <h6>Islehsalci ili: {otherInfo?.year}</h6>
      <hr />

      <button onClick={() => setReadMore((prev) => !prev)}>
        {readMore ? "Close" : "Read more"}
      </button>
      {readMore && (
        <div>
          <p>
            Lorem ipsum nebil ne
            ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum
          </p>
        </div>
      )}
      {/* {readMore ? (
        <div>
          <p>
            Lorem ipsum nebil ne
            ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum
          </p>
        </div>
      ) : null} */}
    </div>
  );
};
