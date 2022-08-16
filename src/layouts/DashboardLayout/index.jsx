import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const {
    data: { token }
  } = useSelector(state => state.user)

  useEffect(() => {
    if (!token) navigate('/login')
  }, [token, navigate])

  return (
    <Fragment>
      <NavigationBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="md:pl-64 flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />

        <main>{children}</main>
      </div>
    </Fragment>
  )
}

export default DashboardLayout
