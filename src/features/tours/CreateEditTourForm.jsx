import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateTour } from "./useCreateTour";
import { useUpdateTour } from "./useUpdateTour";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";

function CreateEditTourForm({ tourToEdit, onCloseModal }) {
  const [t] = useTranslation();
  const { isCreating, createTour } = useCreateTour();
  const { isUpdating, updateTour } = useUpdateTour();

  const loading = isCreating | isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (tourToEdit) {
      updateTour({ data, id: tourToEdit?._id });
      onCloseModal?.();
    } else {
      createTour(data);
      onCloseModal?.();
    }
  };

  return (
    <>
      <h2 className="form-title">{t("tours.createTour")}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            placeholder={t("auth.name")}
            name="name"
            register={register}
            validationRules={{
              required: t("auth.fieldRequired"),
            }}
            error={errors.name?.message}
            disabled={loading}
          />

          <Input
            placeholder={t("tours.price")}
            name="price"
            register={register}
            validationRules={{
              required: t("auth.fieldRequired"),
            }}
            error={errors.price?.message}
            disabled={loading}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">
          <Textarea
            placeholder={t("tours.description")}
            name="description"
            register={register}
            validationRules={{
              required: t("auth.fieldRequired"),
            }}
            error={errors.description?.message}
            disabled={loading}
          />

          <Textarea
            placeholder={t("tours.note")}
            name="note"
            register={register}
            error={errors.note?.message}
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
            {t("tours.createTour")}
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateEditTourForm;
