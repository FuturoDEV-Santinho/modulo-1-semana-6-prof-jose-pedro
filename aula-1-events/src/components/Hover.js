import cat from '../assets/cat.gif'

const Hover = () => {

  const handleOnMouseOver = e => {
    e.target.style.margin= '100px';
    e.target.style.border = 'solid 5pt red';
  }

  const handleOnMouseLeave = e => {
    e.target.style.margin= '0px';
    e.target.style.border = 'none';
  }

  return(
    <img src={cat} alt="cat" onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}/>
  )

}

export default Hover;