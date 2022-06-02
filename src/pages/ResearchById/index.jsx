import BaseBreadcrumbs from '~/components/generic/breadcrumbs/BaseBreadcrumbs'
import DashboardLayout from '~/layouts/DashboardLayout'
import MemberTable from './components/MemberTable'
import ResearchDetails from './components/ResearchDetails'

const pages = [
  { name: 'Penelitian', redirect: '/research', current: false },
  { name: 'Capstone Project', redirect: '#', current: true }
]

const ResearcherDetails = () => {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <BaseBreadcrumbs pages={pages} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ResearchDetails />
          <MemberTable />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ResearcherDetails
