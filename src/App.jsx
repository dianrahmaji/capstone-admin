import { Routes, Route } from 'react-router-dom'
import dashboard from '~/config/dashboard'

import Login from '~/pages/Login'

const App = () => {
  return (
    <Routes>
      {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
