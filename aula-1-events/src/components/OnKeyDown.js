const OnKeyDown = () => {

  const handleOnKeyDown = e => {
    alert((e.keyCode === 48) ? 'You typed 0!' : 'This is not 0');
  }

  return (
    <form>
      <label> Name:
        <input type="text" name="name" onKeyDown={handleOnKeyDown}/>
      </label>
      <button type="submit">Send</button>
    </form>
  );

}

export default OnKeyDown;