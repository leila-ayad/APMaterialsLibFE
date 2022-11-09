const Dialog = ({ show, cancel, confirm }) => {
  if (!show) {
    return <></>;
  }

  return (
    <div className="overlay">
      <div className="dialogContainer">
        <div className="deleteForm">
          <h2>Are you sure?</h2>
          <p>This action cannot be reversed</p>
          <button className="Button" onClick={confirm}>
            Yes, Delete it
          </button>
          <button className="Button" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
