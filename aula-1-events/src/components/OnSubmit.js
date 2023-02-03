const OnSubmit = () => {

  const handleSubmit = e => {
    e.preventDefault();
    alert('You submitted the form!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>
  );

}

export default OnSubmit;