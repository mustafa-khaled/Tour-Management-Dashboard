import { useTranslation } from "react-i18next";
import RouteTitle from "../ui/RouteTitle";
import ToursTable from "../features/tours/ToursTable";
import TourTableOperations from "../features/tours/TourTableOperations";
import CreateEditTour from "../features/tours/CreateEditTour";
import Button from "../ui/Button";

function Tours() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-[10px] rounded-md bg-colorGrey2 p-[15px]">
        <RouteTitle title={t("sidebar.tours")} />
        <CreateEditTour>
          <Button className="!w-[170px]">{t("tours.createTour")}</Button>
        </CreateEditTour>
      </div>

      <TourTableOperations />
      <ToursTable />
    </div>
  );
}

export default Tours;
