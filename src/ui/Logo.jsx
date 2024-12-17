import logoImage from "/public/Logo.png";

function Logo() {
  return (
    <div className="mt-4">
      <img src={logoImage} alt="Logo" className="mx-auto w-[200px]" />
    </div>
  );
}

export default Logo;
