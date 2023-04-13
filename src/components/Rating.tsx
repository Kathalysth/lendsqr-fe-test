import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
function Rating({ rating }: { rating?: boolean }): JSX.Element {
  if (rating !== null && rating !== undefined) {
    return <AiFillStar size={14} className="rating__full" />
  }
  return <AiOutlineStar size={14} className="rating__empty" />
}

export default Rating
