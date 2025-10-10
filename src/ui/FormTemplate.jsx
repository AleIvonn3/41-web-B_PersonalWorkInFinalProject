import FormPersonalData from "./FormPersonalData";

function FormTemplate() {
  return (
    <div className="flex flex-col items-center py-10 sm:py-16 text-center px-4 bg-[#faf8f3]">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-center bg-[#D88C66] text-[#FAF8F3] rounded-xl p-6 max-w-3xl w-full">
        <img
          src="../../public/happyManWithPets.png" // Coloca aquí la ruta de tu ilustración
          alt="Pet adoption"
          className="w-48 sm:w-64  object-contain mb-4 sm:mb-0 sm:mx-6"
        />
        <div className="px-8 sm:px-14">
          <h1 className="text-xl sm:text-3xl font-baloo font-extrabold">
            Completa el formulario y adopta a tu compañero de vida
          </h1>
        </div>
      </div>

      {/* SUBTÍTULO */}
      <p className="mt-4 text-[#ee2337] font-fredoka font-semibold text-xl">
        Su nueva vida contigo, estás a un formulario de distancia
      </p>

      {/* BARRA DE PROGRESO */}
      <div className="flex justify-center items-center gap-2 mt-6 max-w-3xl w-full border-2 border-solid border-black rounded-lg">
        <button className="flex-1 bg-white focus:bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mr-2 leading-tight m-1">
          Datos Personales
        </button>
        <button className="flex-1 bg-white focus:bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:mx-2 leading-tight m-1">
          Datos de Vivienda
        </button>
        <button className="flex-1 bg-white focus:bg-[#a8c3a0] text-[#4b4b4b] rounded-lg py-1 sm:px-8 sm:ml-2 leading-tight m-1">
          Contrato
        </button>
      </div>

      <FormPersonalData />
    </div>
  );
}

export default FormTemplate;
