export default function AddSighting() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const SIGHTING = {
      date: event.target.date.value,
      time: event.target.time.value,
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
      <label htmlFor="date">Date</label>
      <input id="date" name="date" type="date"></input>
      <label htmlFor="time">Time</label>
      <input id="time" name="time" type="time"></input>
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
