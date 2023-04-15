import type { Dispatch, SetStateAction } from 'react'
import classnames from 'classnames'

function Tab({
  setActiveTab,
  activeTab
}: {
  setActiveTab: Dispatch<SetStateAction<number>>
  activeTab: number
}): JSX.Element {
  return (
    <ul className="user__tab" data-testid="app-tab-nav">
      <li
        onClick={() => {
          setActiveTab(1)
        }}
        tabIndex={-1}
        role="button"
        className={classnames({
          active: activeTab === 1
        })}
      >
        <span> General Details</span>
      </li>
      <li
        className={classnames({
          active: activeTab === 2
        })}
        onClick={() => {
          setActiveTab(2)
        }}
        tabIndex={-1}
        role="button"
      >
        <span>Document</span>
      </li>
      <li
        className={classnames({
          active: activeTab === 3
        })}
        onClick={() => {
          setActiveTab(3)
        }}
        tabIndex={-1}
        role="button"
      >
        <span>Bank Details</span>
      </li>
      <li
        className={classnames({
          active: activeTab === 4
        })}
        onClick={() => {
          setActiveTab(4)
        }}
        tabIndex={-1}
        role="button"
      >
        <span>Loans</span>
      </li>
      <li
        className={classnames({
          active: activeTab === 5
        })}
        onClick={() => {
          setActiveTab(5)
        }}
        tabIndex={-1}
        role="button"
      >
        <span>Savings</span>
      </li>
      <li
        className={classnames({
          active: activeTab === 6
        })}
        onClick={() => {
          setActiveTab(6)
        }}
        tabIndex={-1}
        role="button"
      >
        <span>App and System</span>
      </li>
    </ul>
  )
}

export default Tab
