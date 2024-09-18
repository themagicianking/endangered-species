export default function AddSighting() {
  return (
    <form>
      {/* integer primary key */}
      <label for="date">Date</label>
      <input id="date" type="date"></input>
      <label for="time">Time</label>
      <input id="time" type="time"></input>
      <label for="animal-name">Animal Name</label>
      <input id="animal-name" type="text"></input>
      <label for="location">Location</label>
      <input id="location" type="text"></input>
      <label for="health">Healthy?</label>
      <input id="health" type="checkbox"></input>
      <label for="email">Email</label>
      <input id="email" type="email"></input>
      {/* record creation timestamp */}
    </form>
  );
}
