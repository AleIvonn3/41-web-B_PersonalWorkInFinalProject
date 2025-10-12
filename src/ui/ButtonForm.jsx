import { Link } from "react-router-dom";

function ButtonForm({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  // TIPO DE FORM
  // flex-1 bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1

  //BOTON DE ACCION
  //bg-[#D88C66] text-[#FAF8F3] font-semibold px-6 py-2 rounded-full hover:bg-[#F2D6C1] transition

  const styles = {
    selectForm:
      "flex-1 bg-white focus:bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default ButtonForm;
