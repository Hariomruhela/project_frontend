const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
