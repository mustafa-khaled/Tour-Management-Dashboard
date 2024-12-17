import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Admins() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.admins")} />
    </div>
  );
}

export default Admins;
