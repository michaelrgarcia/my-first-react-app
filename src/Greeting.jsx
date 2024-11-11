import PopcornChicken from "./assets/shihlin.png";

export function Greeting() {
  return (
    <section>
      <h1>Shihlin Popcorn Chicken</h1>
      <img
        src={PopcornChicken}
        alt="A plate of popcorn chicken topped with leaves."
      />
    </section>
  );
}

export function GreetingInfo() {
  return <p className="greeting-info">From Shihlin Taiwan Street Snacks</p>;
}
