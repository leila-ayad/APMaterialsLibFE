const Dialog = ( { show, cancel, confirm }) => {

if (!show) {
    return <></>
}

  return (
    <div className="overlay">
      <div className="dialogContainer">
        <h2>Are you sure?</h2>
        <p>This action cannot be reversed</p>
        <button onClick={cancel}>Cancel</button>
        <button onClick={confirm}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default Dialog;
