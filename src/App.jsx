
import { Suspense } from 'react'
import './App.css'
import Baller from './Baller'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {

  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

  const fetchFriends = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked 1')
  }
  const handleClick3 = () => {
    alert('I am clicked 3')
  }

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback ={<h3>Loading data...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>loading...</h3>} >
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman>
      {/* <Baller></Baller> */}
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('I am clicked 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={() => alert('Clicked 4')}>Click Me4</button>
      <button onClick={() => handleClick5(5)}>Click Me5</button>
    </>
  )
}

export default App
