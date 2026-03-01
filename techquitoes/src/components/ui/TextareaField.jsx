const TextareaField = ({ label, name, ...props }) => (
  <div>
    <label className="mb-2 block text-sm text-gray-300">{label}</label>
    <textarea
      name={name}
      {...props}
      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-indigo-500"
    />
  </div>
);

export default TextareaField;
