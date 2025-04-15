import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Main idMain={'#'} />
      <Main idMain={'entrenamiento'} />
      <Main idMain={'servicios'} />
      <Main idMain={'sobreMi'} />
      <Main idMain={'contacto'} />
      <Footer />
    </div>
  )
}

export default LandingPage
