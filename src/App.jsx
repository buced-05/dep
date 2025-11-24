import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Message from './pages/Message'
import Inscription from './pages/Inscription'
import Engagement from './pages/Engagement'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/engagement" element={<Engagement />} />
      </Routes>
    </Layout>
  )
}

export default App

