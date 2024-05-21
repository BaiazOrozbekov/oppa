import Main from "./pages/main/Main"
import About from "./pages/about/About"
import Bussines from "./pages/forBussines/Bussines"
import Accordion from "./pages/FAQ/Accordion"
import Form from "./pages/oppaForm/Form"

function MainPages() {
  return (
    <>
        <Main/>
        <About/>
        <Bussines/>
        <Form/>
        <Accordion/>
    </>
  )
}

export default MainPages