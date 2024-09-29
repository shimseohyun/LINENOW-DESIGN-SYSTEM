import Button from "../components/button/Button";
import InputPassword from "../components/inputText/InputPassword";
import InputText from "../components/inputText/InputText";
import useForm from "../hooks/useForm";

import React from "react";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};
    if (!values.email) {
      errors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "유효한 이메일 주소가 아닙니다.";
    }

    if (!values.password) {
      errors.password = "비밀번호를 입력해주세요.";
    } else if (values.password.length < 6) {
      errors.password = "비밀번호는 최소 6자리 이상이어야 합니다.";
    }

    return errors;
  };

  const onSubmit = (values: LoginFormValues) => {
    console.log("폼 제출:", values);
  };

  const { values, errors, isLoading, handleChange, handleSubmit } =
    useForm<LoginFormValues>({
      initialValues,
      onSubmit,
      validate,
    });

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label="id"
        name="email"
        value={values.email}
        onChange={handleChange}
        errorMessage={errors.email}
      />
      <InputPassword
        label="pw"
        name="password"
        value={values.password}
        onChange={handleChange}
        errorMessage={errors.password}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "제출 중..." : "제출"}
      </Button>
    </form>
  );
};

export default LoginForm;
