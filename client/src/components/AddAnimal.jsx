export default function AddAnimal() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const ANIMAL = {
      animalName: event.target["animal-name"].value,
      addedBy: event.target.tracker.value,
    };
    console.log(ANIMAL);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="animal-name">Animal Name</label>
      <input id="animal-name" name="animal-name" type="text"></input>
      <label htmlFor="tracker">Tracking Scientist</label>
      <input id="tracker" name="tracker" type="text"></input>
      <button type="submit">Create Animal</button>
    </form>
  );
}
