const ArgumentFromProps = ({ argument }) => {

  const handleClick = arg => {
    alert(`This is the argument: ${arg}`);
  }

  return <button onClick={() => handleClick(argument)}>Click to pass argument through props!</button>

}

export default ArgumentFromProps;