import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from './assets/bg1.jpeg'
import bg2 from './assets/bg2.jpeg'

const App = () => {
  return (
    <>
      <Header
        title='This is title'
        descr='This is Description!'
      />
      <Layout
        title='title'
        descr='description'
        urlBg={bg1}
      />
      <Layout
        title='title'
        descr='description'
        colorBg='#e2e2e2'
      />
      <Layout
        title='title'
        descr='description'
        urlBg={bg2}
      />
      <Footer />
    </>
  )
}
export default App;
