import { createMyData } from './data'
import MyCard from './pages/MyCard'


export default function App() {

// 보통은 여기서 변수를 만들어서 아래 컴포넌트 props 로 넘겨준다.

  return (
    <main>
      <MyCard profile={createMyData()}/>
    </main>
  )
}
