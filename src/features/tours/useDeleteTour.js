import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTour as deleteTourApi } from "../../services/apiTours";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useDeleteTour() {
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTour } = useMutation({
    mutationFn: deleteTourApi,
    onSuccess: () => {
      toast.success(t("general.deleteSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["tours"],
      });
    },
    onError: (err) => {
      toast.error(t("general.deleteFailed"));
    },
  });

  return { isDeleting, deleteTour };
}
