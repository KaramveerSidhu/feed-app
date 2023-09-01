import styles from "./Input.module.scss";
import Image from "next/image";
import { useCallback, useState } from "react";

type InputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: Function;
  labelElement?: JSX.Element;
};

const Input = (props: InputProps) => {
  const {
    label,
    onChange = () => undefined,
    value,
    placeholder = "",
    type: inputType = "text",
    labelElement,
  } = props;

  const [type, setType] = useState(inputType);
  const isPasswordInput = inputType === "password";

  const handleTogglePasswordVisibility = useCallback(
    () => setType(type === "password" ? "text" : "password"),
    [type]
  );

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}> {label} </label>}

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          spellCheck="false"
          onChange={(event) => onChange(event.target.value)}
          value={value}
          type={type}
          placeholder={placeholder}
        />
        {isPasswordInput && (
          <div onClick={handleTogglePasswordVisibility}>
            <Image
              src="/icons/eye.svg"
              width={20}
              height={20}
              alt="Show Password"
              className={styles.showPassword}
            />
            {type !== "password" && <div className={styles.strike}></div>}
          </div>
        )}
      </div>

      <div className={styles.labelElement}>{labelElement}</div>
    </div>
  );
};

export default Input;
