import styles from "./Intro.module.scss";

type IntroProps = {
  userName: string;
};

const Intro = (props: IntroProps) => {
  const { userName } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.greeting}>Hello {userName}</h2>
      <h4 className={styles.message}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </h4>
    </section>
  );
};

export default Intro;
