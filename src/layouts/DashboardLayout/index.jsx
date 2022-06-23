import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const { user } = useSelector(state => state.userLogin)

  useEffect(() => {
    console.log(user)
    if (!user) navigate('/login')
  }, [user, navigate])

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
