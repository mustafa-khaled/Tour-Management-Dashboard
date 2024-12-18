import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateAdmin } from "./useCreateAdmin";
import { EMAIL_REGEX } from "../../utils/constants";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function CreateEditUserForm({ userToEdit, onCloseModal }) {
  const [t] = useTranslation();

  const { createAdmin, isLoading } = useCreateAdmin();

  const loading = isLoading;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (userToEdit) {
      console.log("Edit");
    } else {
      createAdmin(data);
    }
  };

  return (
    <>
      <h2 className="form-title">{t("admins.addAdmin")}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[20px]">
          <Input
            type="text"
            placeholder={t("auth.name")}
            name="userName"
            register={register}
            validationRules={{
              required: t("auth.fieldRequired"),
            }}
            error={errors.userName?.message}
            disabled={loading}
          />

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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <div className="mt-4 flex w-[40%] flex-col gap-[10px] self-end ltr:ml-auto rtl:mr-auto">
          <Button
            variant="secondary"
            type="reset"
            onClick={onCloseModal}
            disabled={loading}
          >
            {t("general.cancel")}
          </Button>
          <Button type="submit" disabled={loading}>
            {t("admins.addAdmin")}
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateEditUserForm;
