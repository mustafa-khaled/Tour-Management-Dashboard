import LoginForm from "../features/login/LoginForm";
import TranslationButton from "../ui/header/TranslationButton";

function Login() {
  return (
    <main className="flex h-screen items-center justify-center bg-colorGrey text-textColor">
      <div className="absolute top-5 ltr:left-5 rtl:right-5">
        <TranslationButton />
      </div>
      <LoginForm />
    </main>
  );
}

export default Login;
