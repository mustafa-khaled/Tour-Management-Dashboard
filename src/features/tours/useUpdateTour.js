import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTour as updateTourApi } from "../../services/apiTours";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useUpdateTour() {
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: updateTour, isLoading: isUpdating } = useMutation({
    mutationFn: updateTourApi,
    onSuccess: () => {
      toast.success(t("general.updateSuccess"));
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
    onError: (err) => {
      toast.error(t("general.updateFailed"));
    },
  });

  return { isUpdating, updateTour };
}
