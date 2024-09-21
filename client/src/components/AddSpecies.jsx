// creates a component that allows the user to add a species to the database
// will eventually add species directly to the database
export default function AddSpecies() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const SPECIES = {
      commonName: event.target["common-name"].value,
      scientificName: event.target["scientific-name"].value,
      wildNum: event.target["wild-num"].value,
      cscode: event.target.cscode.value,
    };
    console.log(SPECIES);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="common-name">Common Name</label>
      <input id="common-name" name="common-name" type="text"></input>
      <label htmlFor="scientific-name">Scientific Name</label>
      <input id="scientific-name" name="scientific-name" type="text"></input>
      <label htmlFor="wild-num">Number living in the wild</label>
      <input id="wild-num" name="wild-num" type="number"></input>
      <label htmlFor="cscode">Conservation status code</label>
      <input id="cscode" name="cscode" type="text"></input>
      <button type="submit">Create Species</button>
    </form>
  );
}
