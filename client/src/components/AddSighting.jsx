export default function AddSighting() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const SIGHTING = {
      datetime: event.target.datetime.value,
      animalName: event.target["animal-name"].value,
      location: event.target.location.value,
      healthy: event.target.healthy.checked,
      email: event.target.email.value,
    };
    console.log(SIGHTING);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Time of Sighting</label>
      <input id="datetime" name="datetime" type="datetime-local"></input>
      <label htmlFor="animal-name">Animal Name</label>
      <input id="animal-name" name="animal-name" type="text"></input>
      <label htmlFor="location">Location</label>
      <input id="location" name="location" type="text"></input>
      <label htmlFor="healthy">Healthy?</label>
      <input id="healthy" name="healthy" type="checkbox"></input>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email"></input>
      <button type="submit">Create Sighting</button>
    </form>
  );
}
