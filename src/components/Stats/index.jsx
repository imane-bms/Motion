const StatsCard = ({ title, value }) => {
  return (
    <div>
      <h4>{value}</h4>
      <p>{title}</p>
    </div>
  );
};

export default StatsCard;
