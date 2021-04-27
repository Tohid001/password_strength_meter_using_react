export default function TempInput({ temperature, scale, handleChange }) {
  const scales = { c: "celcius", f: "farenheit" };
  return (
    <div class="form-group">
      <label for="text">Temperature in {scales[scale]}</label>
      <input
        type="text"
        class="form-control"
        id="text"
        placeholder="enter temp."
        value={temperature}
        onChange={(event) => {
          handleChange(event, scale);
        }}
      ></input>
    </div>
  );
}
