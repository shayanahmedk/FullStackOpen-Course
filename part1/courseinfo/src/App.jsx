import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})

  const handleLeftCLick = () => {
    const newClicks = {
      left: clicks.left+1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightCLick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right+1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftCLick}>left</button>
      <span>  </span>
      <button onClick={handleRightCLick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App