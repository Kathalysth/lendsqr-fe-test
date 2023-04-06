import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classnames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import '../../../styles/pages/users.scss'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { fetchUser } from '../../../api'
import Tab from './tabs'
import GeneralDetails from './tabs/GeneralDetails'
import noAvatar from '../../../assets/images/avatar/no_avatar.svg'
import Rating from '../../../components/Rating'
import Divider from '../../../components/Divider'
import Skeleton from '../../../components/skeleton'

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
            {user.data !== null && user.data !== undefined ? (
              <div
                className={classnames({
                  user__photo: user.data?.profile?.avatar,
                  img_wrapper:
                    user.data?.profile?.avatar === '' ||
                    user.data?.profile?.avatar === undefined
                })}
              >
                <img
                  src={user?.data?.profile?.avatar ?? noAvatar}
                  alt={`${user.data.userName}'s Photo`}
                />
              </div>
            ) : (
              <Skeleton className="border-full p-3" />
            )}

            <div className="summary_detail_group ">
              {user.data !== null && user.data !== undefined ? (
                <>
                  <h2 className="summary_name">{`${user.data?.profile.firstName} ${user.data?.profile.lastName}`}</h2>
                  <small>LSQ{user.data?.id}</small>
                </>
              ) : (
                <>
                  <Skeleton className="py-1 px-4" />
                  <Skeleton className="py-1 px-1" />
                </>
              )}
            </div>
            <Divider />
            <div className="summary_detail_group ">
              <span>User&apos;s Tier</span>
              {user.data !== undefined && user.data !== null ? (
                <small>
                  <Rating rating />
                  <Rating rating />
                  <Rating />
                </small>
              ) : (
                <Skeleton className="py-1 px-2" />
              )}
            </div>
            <Divider />
            <div className="summary_detail_group">
              {user.data !== null && user.data !== undefined ? (
                <>
                  <span className="summary_detail_amount">
                    ₦{user.data?.accountBalance}
                  </span>
                  <small>{user.data?.accountNumber}/Providus Bank</small>
                </>
              ) : (
                <>
                  <Skeleton className="py-1" />
                  <Skeleton className="py-1 px-6 " />
                </>
              )}
            </div>
          </div>
          <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className={classnames('user__tab_content')}>
          {activeTab === 1 ? <GeneralDetails user={user.data} /> : null}
        </div>
      </div>
    </main>
  )
}

export default UserView
