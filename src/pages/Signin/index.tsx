import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import '../../styles/pages/signin.scss'
import illustration from '../../assets/images/illustrations/pablo-sign-in.svg'

document.title = 'Log in to manage your loans'
function Signin(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="signin">
      <nav>
        <Logo />
      </nav>
      <main>
        <div className="illustration_wrapper">
          <img
            className="signin_illustration"
            src={illustration}
            alt="sign in  illustration"
          />
        </div>
        <div className="signin_form-wrapper">
          <div className="signin_form_content">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form>
              <div className="form_group">
                <input
                  className="form_control"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form_group form_password">
                <input
                  className="form_control"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  type="button"
                  aria-label="password toggle"
                  className="form_password_toggle"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? ' Hide' : 'Show'}
                </button>
              </div>
              <div className="form_forgot">
                <Link className="forgot__password" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button
                className="form_button"
                type="submit"
                aria-label="login button"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signin
