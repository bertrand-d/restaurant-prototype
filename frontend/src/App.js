import Header from './layouts/Header'
import Footer from './layouts/Footer';
import Homepage from './pages/Homepage'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Homepage></Homepage>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;