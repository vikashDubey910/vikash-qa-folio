const Stats = () => {
  const stats = [
    { value: "50+", label: "Test Cases Created" },
    { value: "2", label: "Projects Completed" },
    { value: "100%", label: "Bug Detection Rate" },
    { value: "72%", label: "Academic Score" },
  ];

  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
