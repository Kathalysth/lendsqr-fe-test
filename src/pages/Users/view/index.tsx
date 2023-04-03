import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../styles/pages/users.scss'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import Tab from './tabs'
import GeneralDetails from './tabs/GeneralDetails'
import noAvatar from '../../../assets/images/avatar/no_avatar.svg'
import Rating from '../../../components/Rating'
import Divider from '../../../components/Divider'

function UserView(): JSX.Element {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <main id="app_content" className="app_content">
      <button
        onClick={() => {
          navigate('/dashboard/users')
        }}
        className="back_btn"
      >
        <HiOutlineArrowLongLeft size={23} /> Back to Users
      </button>
      <div className="user_wrapper">
        <div className="user__top_header">
          <h1>User Details</h1>
          <button>Blacklist User</button>
          <button className="green-border">Activate User</button>
        </div>
        <div className="user__summary">
          <div className="user__summary_wrapper">
            <div className="img_wrapper">
              <img src={noAvatar} alt="avatar" />
            </div>
            <div className="summary_detail_group ">
              <h2 className="summary_name">Grace Effiom</h2>
              <small>LSQFf587g90</small>
            </div>
            <Divider />
            <div className="summary_detail_group ">
              <span>User&apos;s Tier</span>
              <small>
                <Rating rating />
                <Rating rating />
                <Rating />
              </small>
            </div>
            <Divider />
            <div className="summary_detail_group ">
              <span className="summary_detail_amount">₦200,000.00</span>
              <small>9912345678/Providus Bank</small>
            </div>
          </div>
          <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="user__tab_content">
          {activeTab === 1 ? <GeneralDetails /> : null}
        </div>
      </div>
    </main>
  )
}

export default UserView
