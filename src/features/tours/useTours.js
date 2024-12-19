import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getTours } from "../../services/apiTours";

export function useTours() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data, error } = useQuery({
    queryKey: ["tours", page],
    queryFn: () => getTours(page),
    keepPreviousData: true,
  });

  return {
    isLoading,
    currentPage: data?.currentPage,
    totalPages: data?.totalPages,
    totalTours: data?.totalTrips,
    tours: data?.trips,
    error,
  };
}
