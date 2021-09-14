import React from 'react'
import classes from './Test.module.css'
import Button from './Button/Button.jsx'
import Display from './Display/Display';
import Input from './Input/Input';

const Test = () => {

  let [clickCounter, setClickCounter] = React.useState(0)
  let [counter, setCount] = React.useState(0);
  let [user, setUser] = React.useState({name: '', age: 0})

  const handleClickCounter = (clickCounter) => setClickCounter(clickCounter)
  const handleClicks = (counter) => setCount(counter)
  const resetCounter = () => setCount(0)
  const resetClickCounter = () => setClickCounter(0)
  const handleNameChange = (name, age) => setUser({name, age})

  return (
    <div className={classes.parent}>
      <Button
        parentCallback={handleClickCounter}
        parentCallback2={handleClicks}
        parentCallback4={resetCounter}
        parentCallback5={resetClickCounter}
        counter={counter}
        clickCounter={clickCounter}
      />
      <Input
        parentCallback6={handleNameChange}
        name={user.name}
        age={user.age}
      />
      <Display
        user={user}
        counter={counter}
        clickCounter={clickCounter}
        name={user.name}
        age={user.age}
      />
    </div>

  )
}

export default Test