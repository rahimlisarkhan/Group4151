import styles from "./ContactUs.module.css";

export const ContactUs = (props) => {
  console.log("props", props);

  return (
    <div className={styles.content}>
      <div>contact</div>
      {props.tag}
      {props.children}
    </div>
  );
};
