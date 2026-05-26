import { useState } from "react";

function HomePage() {

  const [title, setTitle] = useState("");

  const [complaints, setComplaints] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setComplaints([
      ...complaints,
      title
    ]);

    setTitle("");
  }

  return (
    <div>

      <h1>OpenWard</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Complaint title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <button type="submit">
          Add Complaint
        </button>

      </form>

      <ul>
        {
          complaints.map((complaint, index) => {
            return (
              <li key={index}>
                {complaint}
              </li>
            );
          })
        }
      </ul>

    </div>
  );
}

export default HomePage;