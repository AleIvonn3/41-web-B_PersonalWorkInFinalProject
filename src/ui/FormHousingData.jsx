import ButtonForm from "./ButtonForm";

function FormHousingData() {
  return (
    <form
      className="bg-white border-2 border-[#A8C3A0]  rounded-xl  mt-8 p-6 max-w-md w-full text-left"
    >
      <h2 className="text-lg font-semibold text-center mb-4 text-[#4b4b4b]">
        FORMULARIO DATOS DE VIVIENDA
      </h2>
{/* 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
              Tipo de Vivienda *
            </label>
             <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="tipoVivienda">
                <option value="" disabled selected></option>
                <option value="1">Casa propia</option>
                <option value="2">Casa rentada</option>
                <option value="3">Departamento propio</option>
                <option value="4">Departamento rentado</option>
              </select>
      </div>

{/* 2 */}
      <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Tienes patio o terraza?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="patioTerraza">
              <option value="" disabled selected></option>
              <option value="1">Patio</option>
              <option value="2">Terraza</option>
              <option value="3">Ambos</option>
              <option value="4">Ninguno</option>
            </select>          
        </div>

{/* 3 */}

    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            Tipo de Zona
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="patioTerraza">
              <option value="" disabled selected></option>
              <option value="1">Urbana</option>
              <option value="2">Suburbana</option>
              <option value="3">Rural</option>
            </select>          
        </div>

{/* 4 */}

    <div className="space-y-1">
        <label className="block font-medium mb-1 font-poppins text-[#4b4b4b] ">
            ¿Hay niños en casa?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#A8C3A0] outline-none"
              name="patioTerraza">
              <option value="" disabled selected></option>
              <option value="1">Si</option>
              <option value="2">No</option>
            </select>          
        </div>

           

      </div>
    </form>
  );
}

export default FormHousingData;
