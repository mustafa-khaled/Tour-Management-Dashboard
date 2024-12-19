import { useTours } from "./useTours";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Spinner from "../../ui/spinner/Spinner";
import Table from "../../ui/Table";
import Pagination from "../../ui/pagination/Pagination";
import TourRow from "./TourRow";

function ToursTable() {
  const [t] = useTranslation();

  const [searchParams] = useSearchParams();

  const { isLoading, totalPages, totalTours, tours } = useTours();

  if (isLoading) return <Spinner />;
  if (!totalTours) return <div>No data</div>;

  // Filtering  The Value From The URL (Client Side Filtering)
  const filteredValue = searchParams.get("discount") || "all";

  let filteredTours;
  if (filteredValue === "all") filteredTours = tours;

  if (filteredValue === "no-discount")
    filteredTours = tours.filter((tour) => Number(tour?.discount) === 0);

  if (filteredValue === "with-discount")
    filteredTours = tours.filter((tour) => Number(tour?.discount) > 0);

  const sortedBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortedBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedTours = filteredTours.sort((a, b) => {
    if (field in a && field in b) {
      if (field === "regularPrice") {
        // Ensure the price is treated as a number
        const priceA = parseFloat(a[field]);
        const priceB = parseFloat(b[field]);

        return (priceA - priceB) * modifier;
      } else if (typeof a[field] === "number") {
        return (a[field] - b[field]) * modifier;
      } else if (typeof a[field] === "string") {
        return a[field].localeCompare(b[field]) * modifier;
      }
    }
    return 0;
  });

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Cell isHeader>{t("general.image")}</Table.Cell>
          <Table.Cell isHeader>{t("auth.name")}</Table.Cell>
          <Table.Cell isHeader>{t("tours.destination")}</Table.Cell>
          <Table.Cell isHeader>{t("tours.price")}</Table.Cell>
          <Table.Cell isHeader>{t("tours.discount")}</Table.Cell>
          <Table.Cell isHeader>{t("general.actions")}</Table.Cell>
        </Table.Header>
        <Table.Body
          data={sortedTours}
          render={(tour) => <TourRow tour={tour} key={tour?._id} />}
        />
      </Table>

      <Pagination count={totalTours} pageCount={totalPages} />
    </>
  );
}

export default ToursTable;
