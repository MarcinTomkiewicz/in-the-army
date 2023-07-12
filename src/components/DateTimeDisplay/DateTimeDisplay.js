export const DateTimeDisplay = ({ value, type, isDanger }) => {

  return (
    <div className={`${isDanger ? 'countdown danger' : 'countdown'}`}>
      <div style={isDanger ? {fontWeight: "bold"} : {}} className={isDanger ? 'outline' : ''} data-content={isDanger ? value : ''}>{value}</div>
      <div style={isDanger ? {fontWeight: "bold"} : {}} className={isDanger ? 'outline' : ''} data-content={isDanger ? type : ''}>{type}</div>
    </div>
  );
};