import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Tours() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.tours")} />
    </div>
  );
}

export default Tours;
