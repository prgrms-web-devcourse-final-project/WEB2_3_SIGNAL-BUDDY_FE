export default function MobileFeedbackFilterButtons() {
  const filterOptions = ["ALL", "답변 전", "답변 후"];
  return (
    <div className="flex items-center gap-1">
      {filterOptions.map((filter, index) => (
        <div
          key={index}
          className={`flex h-[30px] w-[80px] items-center justify-center rounded-[30px] text-sm font-semibold ${
            index === 0 ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
