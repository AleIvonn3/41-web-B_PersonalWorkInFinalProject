import { useState } from "react";
import ButtonForm from "./ButtonForm";
import FormPersonalData from "./FormPersonalData";
import FormHousingData from "./FormHousingData";
import FormContract from "./FormContract";

function FormTemplate() {
  const [activeForm, setActiveForm] = useState("personal");

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
        <ButtonForm type="selectForm" onClick={() => setActiveForm("personal")}>
          Datos personales
        </ButtonForm>
        <ButtonForm type="selectForm" onClick={() => setActiveForm("housing")}>
          Datos de vivienda
        </ButtonForm>
        <ButtonForm type="selectForm" onClick={() => setActiveForm("contract")}>
          Contrato
        </ButtonForm>
      </div>

      {/* FORMULARIO */}
      {activeForm === "personal" && <FormPersonalData />}
      {activeForm === "housing" && <FormHousingData />}
      {activeForm === "contract" && <FormContract />}
    </div>
  );
}

export default FormTemplate;
