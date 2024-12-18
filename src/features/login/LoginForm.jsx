import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { useTranslation } from "react-i18next";
import { EMAIL_REGEX } from "../../utils/constants";
import Logo from "../../ui/Logo";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [t] = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px] space-y-3 rounded-lg bg-colorGrey2 p-4"
    >
      <Logo />
      <Input
        type="text"
        placeholder={t("auth.email")}
        name="email"
        register={register}
        validationRules={{
          required: t("auth.fieldRequired"),
          pattern: {
            value: EMAIL_REGEX,
            message: t("auth.invalidEmail"),
          },
        }}
        error={errors.email?.message}
        disabled={isLoading}
      />

      <Input
        type="password"
        placeholder={t("auth.password")}
        name="password"
        register={register}
        validationRules={{
          required: t("auth.fieldRequired"),
        }}
        error={errors.password?.message}
        disabled={isLoading}
      />

      <div className="col-span-1 lg:col-span-2">
        <Button disabled={isLoading} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
