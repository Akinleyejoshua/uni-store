export const ButtonLoader = ({ loading, value, onClick }) => {
  return (
    <button className="button-loader" onClick={() => onClick()}>
      {loading ? <div className="loader"></div> : value}
    </button>
  );
};
