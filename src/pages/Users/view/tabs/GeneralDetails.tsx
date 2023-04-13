import Skeleton from '../../../../components/skeleton'
import type { User } from '../../../../@types'
import { getArrayFromInteger } from '../../../../utils'

function GeneralDetails({
  user
}: {
  user: User | null | undefined
}): JSX.Element {
  return (
    <div className="user_general_details">
      <div className="user__general_details_group">
        <h3 className="user__general_details_group_title">
          Personal Information
        </h3>
        <div className="user__general_details_group_content col-5 ">
          {user !== null && user !== undefined ? (
            <>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Full Name</span>
                <span className="user_detail_value">{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Phone Number</span>
                <span className="user_detail_value">
                  {user?.profile?.phoneNumber}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Email Address</span>
                <span className="user_detail_value">{user?.email}</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">BVN</span>
                <span className="user_detail_value">{user?.profile?.bvn}</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Gender</span>
                <span className="user_detail_value">
                  {user?.profile?.gender}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Marital Status</span>
                <span className="user_detail_value">Single</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Children</span>
                <span className="user_detail_value">None</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Type of residence</span>
                <span className="user_detail_value">
                  Parent&apos;s Apartment
                </span>
              </div>
            </>
          ) : (
            getArrayFromInteger(5).map((num: number) => {
              return (
                <div className="user__general_details_detail" key={num}>
                  <Skeleton className="py-1 px-2" />
                  <Skeleton className="py-1 px-3" />
                </div>
              )
            })
          )}
        </div>
      </div>
      <hr />
      <div className="user__general_details_group">
        <h3 className="user__general_details_group_title">
          Education and Employment
        </h3>
        <div className="user__general_details_group_content">
          {user !== undefined && user !== null ? (
            <>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Level of Education</span>
                <span className="user_detail_value">
                  {user?.education?.level}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Employment Status</span>
                <span className="user_detail_value">
                  {user?.education?.employmentStatus}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Sector of Employment</span>
                <span className="user_detail_value">
                  {user?.education?.sector}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">
                  Duration of Employment
                </span>
                <span className="user_detail_value">
                  {user?.education?.duration}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Office Email</span>
                <span className="user_detail_value lowercase">
                  {user?.education?.officeEmail}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Monthly income</span>
                <span className="user_detail_value">
                  ₦{user?.education?.monthlyIncome[0]} - ₦
                  {user?.education?.monthlyIncome[1]}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Loan repayment</span>
                <span className="user_detail_value">
                  {user?.education?.loanRepayment}
                </span>
              </div>
            </>
          ) : (
            getArrayFromInteger(4).map((num: number) => {
              return (
                <div className="user__general_details_detail" key={num}>
                  <Skeleton className="py-1 px-2" />
                  <Skeleton className="py-1 px-3" />
                </div>
              )
            })
          )}
        </div>
      </div>
      <hr />
      <div className="user__general_details_group">
        <h3 className="user__general_details_group_title">Socials</h3>
        <div className="user__general_details_group_content">
          {user !== null && user !== undefined ? (
            <>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Twitter</span>
                <span className="user_detail_value">
                  {user?.socials?.twitter}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Facebook</span>
                <span className="user_detail_value">
                  {user?.socials?.facebook}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Instagram</span>
                <span className="user_detail_value">
                  {user?.socials?.instagram}
                </span>
              </div>
            </>
          ) : (
            getArrayFromInteger(3).map((num: number) => {
              return (
                <div className="user__general_details_detail" key={num}>
                  <Skeleton className="py-1 px-2" />
                  <Skeleton className="py-1 px-3" />
                </div>
              )
            })
          )}
        </div>
      </div>
      <hr />
      <div className="user__general_details_group">
        <h3 className="user__general_details_group_title">Guarantor</h3>
        <div className="user__general_details_group_content">
          {user !== null && user !== undefined ? (
            <>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Full Name</span>
                <span className="user_detail_value">{`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}</span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Phone Number</span>
                <span className="user_detail_value">
                  {user?.guarantor?.phoneNumber}
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Email Address</span>
                <span className="user_detail_value lowercase">
                  {`${user?.guarantor?.firstName}.${user?.guarantor?.lastName}`}
                  @gmail.com
                </span>
              </div>
              <div className="user__general_details_detail">
                <span className="user_detail_label">Relationship</span>
                <span className="user_detail_value">{`${
                  user?.guarantor?.gender.toLowerCase() === 'male'
                    ? 'Brother'
                    : 'Sister'
                }`}</span>
              </div>
            </>
          ) : (
            getArrayFromInteger(3).map((num: number) => {
              return (
                <div className="user__general_details_detail" key={num}>
                  <Skeleton className="py-1 px-2" />
                  <Skeleton className="py-1 px-3" />
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails
