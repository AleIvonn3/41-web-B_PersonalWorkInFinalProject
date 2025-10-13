import { Link } from "react-router-dom";

function ButtonForm({ children, disabled, to, type, onClick, active }) {
  // TIPO DE FORM
  // flex-1 bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1

  //BOTON DE ACCION
  //bg-[#D88C66] text-[#FAF8F3] font-semibold px-6 py-2 rounded-full hover:bg-[#F2D6C1] transition

  const styles = {
    selectForm: `flex-1 text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1
      ${active ? "bg-[#a8c3a0]" : "bg-white"}`,
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
