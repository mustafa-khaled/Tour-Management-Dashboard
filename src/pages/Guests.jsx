import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Guests() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.guests")} />
    </div>
  );
}

export default Guests;
