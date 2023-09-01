import Image from "next/image";
import styles from "./Login.module.scss";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/icons/shapes.svg"
        width={40}
        height={40}
        alt="Login to the app"
      />

      <LoginForm />
    </div>
  );
};

export default Login;
