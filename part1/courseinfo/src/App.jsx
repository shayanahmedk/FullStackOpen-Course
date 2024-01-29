import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('renderring with counter value...', counter)

  const increaseByOne = () => {
    console.log('increasing, value before...', counter)
    setCounter(counter+1)
  }
  const decreaseByone = () => {
    console.log('decreasing, value before...', counter)
    setCounter(counter-1)
  }
  const setToZero = () => {
    console.log('resetting value to zero, value before...', counter)
    setCounter(0)
  }

  return (
    <div>
    <Display counter={counter} />
    <br />
    <Button onClick={increaseByOne} text='plus' />
    <br />
    <br />
    <Button onClick={setToZero} text='zero' />
    <br />
    <br />
    <Button onClick={decreaseByone} text='minus' />
    </div>
  )
}

export default App