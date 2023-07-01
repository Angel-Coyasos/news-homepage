import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from './components/NewContainer';
import { ArticleContainer } from './components/ArticleContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='px-4 pt-6'>
      <Header />
      <div className='lg:flex lg:gap-8'>
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer/>
    </main>
  )
}

export default App
