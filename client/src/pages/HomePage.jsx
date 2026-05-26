import { useState } from "react";

function HomePage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      title,
      description,
    });
  }

  return (
    <div>

      <h1>Create Complaint</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <br />
        <br />

        <textarea
          placeholder="Complaint description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <br />
        <br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default HomePage;