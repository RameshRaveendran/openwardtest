function HomePage() {

  function handleClick() {
    alert("Complaint Submitted");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default HomePage;