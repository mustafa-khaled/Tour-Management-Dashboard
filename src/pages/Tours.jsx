import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";
import ToursTable from "../features/tours/ToursTable";
import TourTableOperations from "../features/tours/TourTableOperations";

function Tours() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <RouteTitle title={t("sidebar.tours")} />
      <TourTableOperations />
      <ToursTable />
    </div>
  );
}

export default Tours;
