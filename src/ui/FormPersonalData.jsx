import ButtonForm from "./ButtonForm";
import Input from "./Input";

function FormPersonalData() {
  return (
    <form className="bg-white border-2 border-[#A8C3A0]  rounded-xl  mt-8 p-6 max-w-md w-full text-left">
      <h2 className="text-lg font-semibold text-center mb-4 text-[#4b4b4b]">
        Datos Personales
      </h2>

      <div className="space-y-4">
        {/* Nombre */}
        <Input requiredInfo="Nombre Completo *" type="text" />
        {/* Correo */}
        <Input requiredInfo="Correo Electrónico *" type="email" />

        {/* Teléfono y fecha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input requiredInfo="Número Telefónico *" type="number" />
          <Input requiredInfo="Fecha de nacimiento *" type="date" />
        </div>

        {/* Ciudad y CP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
              Ciudad *
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none">
              <option value="">Selecciona tu estado</option>
              <option value="ags">Aguascalientes</option>
              <option value="bc">Baja California</option>
              <option value="bcs">Baja California Sur</option>
              <option value="camp">Campeche</option>
              <option value="chis">Chiapas</option>
              <option value="chih">Chihuahua</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="coah">Coahuila</option>
              <option value="col">Colima</option>
              <option value="com">Durango</option>
              <option value="edomex">Estado de México</option>
              <option value="gto">Guanajuato</option>
              <option value="gro">Guerrero</option>
              <option value="hgo">Hidalgo</option>
              <option value="jal">Jalisco</option>
              <option value="mich">Michoacán</option>
              <option value="mor">Morelos</option>
              <option value="nay">Nayarit</option>
              <option value="nl">Nuevo León</option>
              <option value="oax">Oaxaca</option>
              <option value="pue">Puebla</option>
              <option value="qro">Querétaro</option>
              <option value="qroo">Quintana Roo</option>
              <option value="slp">San Luis Potosí</option>
              <option value="sin">Sinaloa</option>
              <option value="son">Sonora</option>
              <option value="tab">Tabasco</option>
              <option value="tamps">Tamaulipas</option>
              <option value="tlax">Tlaxcala</option>
              <option value="ver">Veracruz</option>
              <option value="yuc">Yucatán</option>
              <option value="zac">Zacatecas</option>
            </select>
          </div>
          <Input requiredInfo="Código Postal *" type="number" />
        </div>

        {/* Dirección */}
        <Input requiredInfo="Dirección *" type="text" />

        {/* INE */}
        <div>
          <Input
            requiredInfo="INE (Agrega tu foto en PDF) *"
            type="file"
            accept=".pdf"
          >
            <ButtonForm style="actionGreen">Agregar</ButtonForm>
          </Input>
        </div>
      </div>

      {/* SUBMIT FORMULARIO */}
      <div className="flex flex-row items-center mt-8 space-y-4 justify-center w-full">
        <ButtonForm style="actionOrange" type="submit">
          Siguiente
        </ButtonForm>
        <img
          src="../../public/paw.png"
          alt="Paw"
          className="w-20 sm:w-44 sm:h-44 object-contain m-4  sm:m-6 rotate-45"
        />
      </div>
    </form>
  );
}

export default FormPersonalData;
