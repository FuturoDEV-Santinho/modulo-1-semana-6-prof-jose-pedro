import { useState } from "react";

const FavoriteColor = ({ color }) => {

  const [favoriteColor, setFavoriteColor] = useState("blue");
  const [showColor, setShowColor] = useState(true);

  const handleClick = () => {
    setFavoriteColor(color);
  }

  return (
    <div>
      {showColor && <p>My favorite color is {favoriteColor}</p>}
      <button onClick={handleClick}>Change Color</button>
      <button onClick={() => setShowColor(!showColor)}>{(showColor) ? "Hide" : "Show"} Color</button>
    </div>
  )

}

export default FavoriteColor;