export const SkelentalLoader = ({ type }) => {
  return (
    <div className="skelental-loader slow-blink-fade">
      {type === "text" && <div className="text">
        <p></p>
        <p></p>
        </div>}
      {type === "avater" && <div className="avater">
        <p></p>
        </div>}
      {type === "dashboard" && <div className="dashboard">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        </div>}
      {type === "videos" && <div className="videos">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        
        </div>}
    </div>
  );
};
