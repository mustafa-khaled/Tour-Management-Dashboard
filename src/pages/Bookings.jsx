import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Bookings() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.bookings")} />
    </div>
  );
}

export default Bookings;
