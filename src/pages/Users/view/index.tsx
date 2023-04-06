import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import '../../../styles/pages/users.scss'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { fetchUser } from '../../../api'
import Tab from './tabs'
import GeneralDetails from './tabs/GeneralDetails'
import noAvatar from '../../../assets/images/avatar/no_avatar.svg'
import Rating from '../../../components/Rating'
import Divider from '../../../components/Divider'

function UserView(): JSX.Element {
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useQuery(['user', id], fetchUser, { placeholderData: null })
  const [activeTab, setActiveTab] = useState<number>(1)
  console.log(user.data)
  if (user.data === undefined && user.data === null) {
    return null
  }
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
            {user?.data?.profile?.avatar ? (
              <div className="user__photo">
                <img
                  src={user?.data?.profile?.avatar}
                  alt={`${user.data.userName}'s Photo`}
                />
              </div>
            ) : (
              <div className="img_wrapper">
                <img src={noAvatar} alt="avatar" />
              </div>
            )}

            <div className="summary_detail_group ">
              <h2 className="summary_name">{`${user.data?.profile.firstName} ${user.data?.profile.lastName}`}</h2>
              <small>LSQ{user.data?.id}</small>
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
              <span className="summary_detail_amount">
                ₦{user.data?.accountBalance}
              </span>
              <small>{user.data?.accountNumber}/Providus Bank</small>
            </div>
          </div>
          <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="user__tab_content">
          {activeTab === 1 ? <GeneralDetails user={user.data} /> : null}
        </div>
      </div>
    </main>
  )
}

export default UserView
