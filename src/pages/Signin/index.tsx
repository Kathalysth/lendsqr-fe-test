import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import type { FormEvent, ChangeEvent } from 'react'
import Logo from '../../components/logo'
import '../../styles/pages/signin.scss'
import illustration from '../../assets/images/illustrations/pablo-sign-in.svg'
import type { LoginData } from '../../@types'
import { setDocumentTitle } from '../../utils'

function Signin({
  submit
}: {
  submit?: (values: LoginData) => void
}): JSX.Element {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [values, setValues] = useState<LoginData>({ email: '', password: '' })
  const [errors, setErrors] = useState<LoginData>({ email: '', password: '' })
  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword)
  }
  useEffect(() => {
    setDocumentTitle('Log in to manage your loans')
  })
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    })
  }
  const isDisabled = (values: LoginData): boolean => {
    if (values.email === '' || values.password === '') {
      return true
    }
    return false
  }
  const validateLoginData = (values: LoginData): boolean => {
    let isValid = true
    let errorObject: LoginData = { email: '', password: '' }
    setErrors(errorObject)
    if (values.email === undefined || values.email === '') {
      errorObject = { ...errorObject, email: 'Please enter email' }
      isValid = false
    }
    if (!values.email?.includes('@')) {
      errorObject = { ...errorObject, email: 'Please enter a valid email' }
      isValid = false
    }
    if (values.password === undefined || values.password === '') {
      errorObject = { ...errorObject, password: 'Please enter password' }
      isValid = false
    }
    setErrors(errorObject)
    return isValid
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (validateLoginData(values)) {
      if (submit !== undefined) {
        submit(values)
      }
      localStorage.setItem('auth', JSON.stringify(true))
      navigate('/dashboard/users')
    }
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
            <form onSubmit={handleSubmit} noValidate>
              <div className="form_group">
                <label className="none" htmlFor="email"></label>
                <input
                  id="email"
                  className="form_control"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <p className="form__error_field">{errors.email}</p>
              </div>
              <div className="form_group form_password">
                <label className="none" htmlFor="password">
                  Password
                </label>
                <div className="form_password">
                  <input
                    id="password"
                    className="form_control"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    name="toggle password"
                    role="button"
                    type="button"
                    aria-label="password toggle"
                    className="form_password_toggle"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <p className="form__error_field">{errors.password}</p>
              </div>
              <div className="form_forgot">
                <Link className="forgot__password" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button
                disabled={isDisabled(values)}
                className={classnames('form_button', {
                  disabled: isDisabled(values)
                })}
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
