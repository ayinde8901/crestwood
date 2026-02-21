import CountUp from "react-countup";
import statsData from "../../Data/StatsData";
import "./SchoolStats.css";


const SchoolStats = () => {
  return (
    <section className="school-stats">
      <div className="stats-container">
        {statsData.map(stat => {
          const Icon = stat.icon;

          return (
            <div key={stat.id} className="stat-item">
              <Icon className="stat-icon" />

              <h3>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3}
                />
                {stat.suffix}
              </h3>

              <p>{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SchoolStats;
