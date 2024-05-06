import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headings from './components/Headings'
import Section from './components/Section'
import Counter from './components/Counter'
import CounterControlled from './components/CounterControlled'
import List from './components/List'
import UserList from './components/UserList'
import FibNumber from './components/FibNumber'
import CounterWithChildren from './components/CounterWithChildren'

function App() {

  const [counter, setCounter] = useState<number>(37);


  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  return (
    <>
      <Headings title={'Hello'} />
      <Section>
        This is my Section
      </Section>
      <CounterControlled setCounter={setCounter} children={`Count is ${counter}`} />
      <List
        items={['☕ Coffee', '🌮 Tacos', '🧑‍💻 Code']}
        render={(item: string) => {
          return (<span className='gold'>{item}</span>)
        }}
      />
      <UserList />

      <FibNumber fibNumber={counter} />

      <input ref={inputRef} type="text" />

      <CounterWithChildren>{(value: number) => <>Current Count: {value}</>}</CounterWithChildren>

    </>
  )
}

export default App
