const OnChange = () => {

  const handleChange = () => {
    alert('You changed the name field!');
  }

  return (
    <form>
      <label> Name:
        <input type="text" onChange={handleChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );

}

export default OnChange;