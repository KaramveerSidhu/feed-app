import styles from "./Form.module.scss";

type FormProps = {
  children: JSX.Element;
  title?: string;
  description?: string;
};

const Form = (props: FormProps) => {
  const { children, title, description } = props;

  return (
    <div className={styles.container}>
      {!!title && <h5 className={styles.title}> {title} </h5>}
      {description && <h6 className={styles.description}> {description} </h6>}
      {children}
    </div>
  );
};

export default Form;
