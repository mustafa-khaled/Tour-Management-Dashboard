import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Settings() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.settings")} />
    </div>
  );
}

export default Settings;
