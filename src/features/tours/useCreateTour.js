import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTour as createTourApi } from "../../services/apiTours";
import { toast } from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createTour, isLoading: isCreating } = useMutation({
    mutationFn: createTourApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createTour };
}
