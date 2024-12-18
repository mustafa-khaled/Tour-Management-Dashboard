import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";
import AdminActions from "../features/admins/AdminActions";

function Admins() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <RouteTitle title={t("sidebar.admins")} />
      <AdminActions />
    </div>
  );
}

export default Admins;
