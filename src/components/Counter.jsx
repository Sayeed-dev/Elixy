const stats = [
  { number: 10, label: "Total Friends", accent: "from-blue-400 to-blue-600" },
  { number: 3, label: "On Track", accent: "from-sky-400 to-blue-500" },
  { number: 6, label: "Need Attention", accent: "from-amber-400 to-orange-500" },
  { number: 12, label: "Interactions This Month", accent: "from-blue-300 to-blue-700" },
];

export default function Counter() {
  return (
    <section className="relative mesh-gradient px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16 text-center">
          <p className="label-caps mb-3">Overview</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your connection snapshot
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover group rounded-2xl p-8 sm:p-10 text-center"
            >
              <div
                className={`mx-auto mb-5 h-1 w-12 rounded-full bg-gradient-to-r ${item.accent} opacity-80 transition group-hover:w-16 group-hover:opacity-100`}
              />
              <p className="mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {item.number}
              </p>
              <p className="text-sm font-medium uppercase tracking-wide text-blue-200/50">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
