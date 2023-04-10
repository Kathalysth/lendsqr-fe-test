import { useNavigate } from 'react-router-dom'
import Logo from '../../components/logo'
import illustration from '../../assets/images/illustrations/empty-state.svg'
import { setDocumentTitle } from '../../utils'

setDocumentTitle('404')
function NotFound(): JSX.Element {
  const navigate = useNavigate()
  return (
    <main className="p-2 h-screen">
      <Logo />
      <div className="flex justify-center items-center flex-column mt-2 py-1 text-center">
        <img src={illustration} alt="empty" />
        <h1 className="text-secondary">Page non-existent</h1>
        <p>
          The page your are looking for cannot be found. Go back to homepage.
        </p>
        <button
          onClick={() => {
            navigate('/dashboard')
          }}
          className="mt-1 p-1 text-white bg-secondary border-xl"
        >
          Back Home
        </button>
      </div>
    </main>
  )
}

export default NotFound
