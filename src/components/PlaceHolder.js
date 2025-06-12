const PlaceHolder = () => {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2 className="text-muted p-2">Loading</h2>
        <div className="spinner-border" style={{ width: "2rem", height: "2rem" }} role="status">
          <span className="visually-hidden">Loading</span>
        </div>
      </div>
    </>
  )
}

  export default PlaceHolder;
