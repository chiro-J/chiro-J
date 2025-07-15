import { createMyData } from './data'
import MyCard from './pages/MyCard'


export default function App() {

  

  return (
    <main>
      <MyCard profile={createMyData()}/>
    </main>
  )
}
