import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTour as createTourApi } from "../../services/apiTours";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useCreateTour() {
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: createTour, isLoading: isCreating } = useMutation({
    mutationFn: createTourApi,
    onSuccess: () => {
      toast.success(t("general.createSuccess"));
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },

    onError: (err) => {
      toast.error(t("general.createFailed"));
    },
  });

  return { isCreating, createTour };
}
