import Header from './Header/Header.tsx'
import Main from './Main/Main.tsx'
import Footer from './Footer/Footer.tsx'

function App(): React.JSX.Element {
  
  return (
    <>
      <div className="page__content">
      <Header />
      <Main />
      <Footer />
      </div>
    </>
  )
}

export default App
