import { Dispatch, SetStateAction } from 'react';
import styles from './CustomInput.module.css';

export interface ICustomInput {
  value: string;
  type: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleFunction?: Function;
  complete?: string;
}

const CustomInput: React.FC<ICustomInput> = ({
  value,
  type,
  placeholder,
  setValue,
  handleFunction,
  complete,
}) => {
  let autocomplete = 'on';
  if (complete) {
    autocomplete = complete;
  }
  return (
    <input
      className={`${styles.asmForm__input} ${styles.validate}`}
      type={type}
      name={value}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        if (handleFunction && value.length > 0) handleFunction(e.target.value);
      }}
      placeholder={placeholder}
      autoComplete={autocomplete}
    />
  );
};

export default CustomInput;
