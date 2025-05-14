import ComponentePai from "./components/ComponentePai"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Saudacao from "./components/Saudacao"
// import { TesteNovo } from "./components/Saudacao"
// import Saudacao from "./components/Saudacao"



const App = () => {
  return (
    <>
    <Header/>
      <ComponentePai>
        <Saudacao nome="Nayara"/>
    </ComponentePai>
    <ComponentePai>
      <Saudacao nome="Julio"/>
    </ComponentePai>
    {/* <Saudacao/>*/}
    <Footer/>
    </>
  )
}