import "../src/index.css"
import Header from "./components/Header/header"
import Post from "./components/Post/Post"

function App() {

  return (
    <>
      <Header />

      <main>
        <Post title="Meu primeiro post" readingTime={1}>
          <p>Introducao</p>
          <p>Desenvolvimento da ideia</p>
          <p>Conclusao</p>
        </Post>

        <Post title="Meu segundo post"> 
          <em>Texto em italico</em>
        </Post>

      </main>
    </>
  )
}

export default App