import Button from "@components/shared/button";
import Form from "@components/shared/form";
import Input from "@components/shared/form/input";
import styles from "./LoginForm.module.scss";
import Image from "next/image";

type LoginFormProps = {
  onClose?: () => void;
  onFollowUpClick?: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { onClose, onFollowUpClick = () => undefined } = props;

  return (
    <Form title="WELCOME BACK" description="Log into your account">
      <>
        {onClose && (
          <Image
            src="/icons/cross.svg"
            width={16}
            height={16}
            alt="Close Modal"
            className={styles.cross}
            onClick={onClose}
          />
        )}
        <div className={styles.formGroup}>
          <Input
            label="Email or Username"
            placeholder="Enter your email or username"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            labelElement={
              <div className={styles.forgotPassword}>Forgot Password?</div>
            }
          />
          <Button href="/feed" className={styles.login}>
            Login Now
          </Button>
          <h6 className={styles.followUpMessage}>
            Not registered yet?
            <span onClick={onFollowUpClick}> Register → </span>
          </h6>
        </div>
      </>
    </Form>
  );
};

export default LoginForm;
