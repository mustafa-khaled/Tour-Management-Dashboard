import { useTranslation } from "react-i18next";
import AddEditAdmin from "./CreateEditAdmin";
import Button from "../../ui/Button";

function AdminActions() {
  const [t] = useTranslation();

  return (
    <div className="flex items-center justify-end">
      <AddEditAdmin>
        <Button className="max-w-[170px]">{t("admins.addAdmin")}</Button>
      </AddEditAdmin>
    </div>
  );
}

export default AdminActions;
