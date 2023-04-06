import classnames from 'classnames'

import { getArrayFromInteger } from '../../utils'
type Props = {
  className?: string
  count?: number
}
function Skeleton(props: Props): JSX.Element {
  const numberOfItems = getArrayFromInteger(props.count ?? 1)

  return (
    <div>
      {numberOfItems.map(item => (
        <div
          className={classnames('skeleton', props?.className ?? '')}
          key={item + 1}
        />
      ))}
    </div>
  )
}

export default Skeleton
