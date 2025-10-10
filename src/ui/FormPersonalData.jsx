import Input from "./Input";

function FormPersonalData() {
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

      {/* FORMULARIO */}
      {/* TODO: TRAER LA INFORMACION DE LOS DATOS DE USUARIO */}
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
            <label className="block mb-1 font-poppins text-[#4b4b4b] font-medium">
              INE (Agrega tu foto en PDF) *
            </label>
            <div className=" items-center gap-2 grid grid-cols-1 sm:grid-cols-2">
              <input
                type="file"
                accept=".pdf"
                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200 outline-none"
              />
              <button
                type="button"
                className="bg-[#A8C3A0] text-#faf8f3 px-4 py-2 font-extrabold hover:bg-[#A8C3A0] transition rounded-full"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Botón siguiente */}
        <div className="flex flex-row items-center mt-8 space-y-4 justify-center w-full">
          <button
            type="submit"
            className="bg-[#D88C66] text-[#FAF8F3] font-semibold px-6 py-2 rounded-full hover:bg-[#F2D6C1] transition"
          >
            Siguiente
          </button>

          {/* Icono decorativo de huellita */}
          <img
            src="../../public/paw.png" // Coloca aquí la ruta de tu ilustración
            alt="Paw"
            className="w-20 sm:w-44 sm:h-44 object-contain m-4  sm:m-6 rotate-45"
          />
        </div>
      </form>
    </div>
  );
}

export default FormPersonalData;
