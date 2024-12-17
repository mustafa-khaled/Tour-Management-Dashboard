import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";

function Dashboard() {
  const [t] = useTranslation();

  return (
    <div>
      <RouteTitle title={t("sidebar.dashboard")} />
    </div>
  );
}

export default Dashboard;
