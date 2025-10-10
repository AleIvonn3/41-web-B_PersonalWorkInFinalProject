function Input({ requiredInfo, type }) {
  return (
    <div>
      <label className="block text-base mb-1 font-poppins text-[#4b4b4b] font-medium">
        {requiredInfo}
      </label>
      <input
        type={type}
        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-[#a8c3a0 ] outline-none"
      />
    </div>
  );
}

export default Input;
