import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classnames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import '../../../styles/pages/users.scss'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { fetchUser } from '../../../api'
import Tab from './tabs'
import type { User } from '../../../@types'
import GeneralDetails from './tabs/GeneralDetails'
import noAvatar from '../../../assets/images/avatar/no_avatar.svg'
import Rating from '../../../components/Rating'
import Divider from '../../../components/Divider'
import Skeleton from '../../../components/skeleton'
import { getUserFromStore, setDocumentTitle } from '../../../utils'

function UserView(): JSX.Element | null {
  const [user, setUser] = useState<User | null>(null)
  const [fetchFromAPI, setFetchFromAPI] = useState<boolean>(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const userFetch = useQuery(['user', id], fetchUser, {
    placeholderData: null,
    enabled: fetchFromAPI
  })

  const [activeTab, setActiveTab] = useState<number>(1)
  if (user === undefined && user === null) {
    return null
  }
  if (
    userFetch?.data !== null &&
    userFetch.data !== undefined &&
    user === null &&
    fetchFromAPI
  ) {
    setUser(userFetch?.data ?? null)
  }

  async function setUserFromStore(): Promise<void> {
    if (id !== undefined && !fetchFromAPI) {
      const userFromStore: User | undefined = await getUserFromStore(id)
      if (userFromStore !== undefined) {
        setUser(userFromStore)
      } else {
        setFetchFromAPI(true)
      }
    }
  }
  useEffect(() => {
    // eslint-disable-next-line
    setUserFromStore()
  }, [])

  useEffect(() => {
    setDocumentTitle(
      `User - ${user?.profile?.firstName ?? ''} ${
        user?.profile?.lastName ?? ''
      }`
    )
  })
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
      {!userFetch?.isError ? (
        <div className="user_wrapper">
          <div className="user__top_header">
            <h1>User Details</h1>
            <button>Blacklist User</button>
            <button className="green-border">Activate User</button>
          </div>
          <div className="user__summary">
            <div className="user__summary_wrapper">
              {user !== null ? (
                <div
                  className={classnames({
                    user__photo: user?.profile?.avatar,
                    img_wrapper:
                      user?.profile?.avatar === '' ||
                      user?.profile?.avatar === undefined
                  })}
                >
                  <img
                    src={user?.profile?.avatar ?? noAvatar}
                    alt={`${user.userName}'s Photo`}
                  />
                </div>
              ) : (
                <Skeleton className="border-full p-3" />
              )}

              <div className="summary_detail_group ">
                {user !== null && user !== undefined ? (
                  <>
                    <h2 className="summary_name">{`${user?.profile.firstName} ${user?.profile.lastName}`}</h2>
                    <small>LSQ{user?.id}</small>
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
                {user !== undefined && user !== null ? (
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
                {user !== null && user !== undefined ? (
                  <>
                    <span className="summary_detail_amount">
                      ₦{user?.accountBalance}
                    </span>
                    <small>{user?.accountNumber}/Providus Bank</small>
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
            {activeTab === 1 ? <GeneralDetails user={user} /> : null}
          </div>
        </div>
      ) : (
        <div>User Not Found :(</div>
      )}
    </main>
  )
}

export default UserView
