import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreateAdmin() {
  const navigate = useNavigate();
  const [t] = useTranslation();

  const { mutate: createAdmin, isPending: isLoading } = useMutation({
    mutationFn: signUp,

    onSuccess: (data) => {
      toast.success(t("admins.successCreate"));
      navigate("/login", { replace: true });
    },

    onError: (error) => {
      if (error?.response?.data?.msg === "email already exist") {
        toast.error(t("auth.existMail"));
      } else {
        toast.error(t("admins.failedCreate"));
      }
    },
  });

  return { createAdmin, isLoading };
}
