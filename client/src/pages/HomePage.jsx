import Button from "../components/Button";

function HomePage() {
  const title = "OpenWard";

  return (
    <div>
      <h1>{title}</h1>
      <h1>{10 * 5}</h1>
      <h1>{"Ramesh"}</h1>
      <h1>{true}</h1>
      <p>Report. Track. Resolve.</p>
      <Button/>

    </div>
  );
}

export default HomePage;