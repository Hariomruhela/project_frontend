const InputField = ({ label,  ...props }) => (
  <div>
    <label className="mb-2 block text-sm text-gray-300">{label}</label>
    <input
      
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-indigo-500"
    />
  </div>
);

export default InputField;
