import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

export function useLogin() {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      localStorage.setItem("TOKEN_ADMIN", data?.accessToken);
      toast.success(t("auth.loginSuccess"));
      navigate("/", { replace: true });
    },
    onError: (error) => {
      if (
        error?.response?.data?.msg === "password not valid" ||
        error?.response?.data?.msg === "email not valid"
      ) {
        toast.error(t("auth.invalidEmailOrPassword"));
      } else {
        toast.error(t("auth.loginFailed"));
      }
    },
  });

  return { login, isLoading };
}
