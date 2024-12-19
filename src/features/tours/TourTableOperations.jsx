import { useTranslation } from "react-i18next";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function TourTableOperations() {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col items-end justify-end gap-[10px] lg:flex-row lg:items-center">
      <div className="rounded-md bg-colorGrey2 p-[8px]">
        <Filter
          filterField="discount"
          options={[
            { value: "all", label: t("tours.filter.all") },
            { value: "no-discount", label: t("tours.filter.noDiscount") },
            { value: "with-discount", label: t("tours.filter.withDiscount") },
          ]}
        />
      </div>
      <SortBy
        options={[
          { value: "name-asc", label: t("tours.filter.sortByNameA-Z") },
          { value: "name-desc", label: t("tours.filter.sortByNameZ-A") },
          {
            value: "regularPrice-asc",
            label: t("tours.filter.sortByLowPrice"),
          },
          {
            value: "regularPrice-desc",
            label: t("tours.filter.sortByHightPrice"),
          },
        ]}
      />
    </div>
  );
}

export default TourTableOperations;
