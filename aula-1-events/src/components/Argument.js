const Argument = () => {

  const handleClickWithArgument = argument => {
    alert(`This is the argument: ${argument}`);
  }

  return <button onClick={() => handleClickWithArgument('Maria')}>Click to pass argument!</button>

}

export default Argument;