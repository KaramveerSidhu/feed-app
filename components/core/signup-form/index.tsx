import Button from "@components/shared/button";
import Form from "@components/shared/form";
import Input from "@components/shared/form/input";
import styles from "./SignUpForm.module.scss";
import Image from "next/image";

type SignUpFormProps = {
  onClose?: () => void;
  onFollowUpClick?: () => void;
};

const SignUpForm = (props: SignUpFormProps) => {
  const { onClose = () => undefined, onFollowUpClick = () => undefined } =
    props;

  return (
    <Form title="SIGN UP" description="Create an account to continue">
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
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Username" placeholder="Choose a preferred username" />
          <Input
            label="Password"
            placeholder="Choose a strong password"
            type="password"
          />
          <Button className={styles.login}> Continue </Button>
          <h6 className={styles.followUpMessage}>
            Already have an account?{" "}
            <span onClick={onFollowUpClick}> Login → </span>
          </h6>
        </div>
      </>
    </Form>
  );
};

export default SignUpForm;
