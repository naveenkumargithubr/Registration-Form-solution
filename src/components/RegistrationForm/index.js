// Write your JS code here
// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  // intially input fields and errors should be set
  state = {
    firstNameInput: '',
    lastNameInput: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitForm: false,
  }

  // update every letter to firstName Input field
  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  // valodate firstname input field
  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  // shows an error msg if its false
  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  // display the firstname field
  renderFirstNameField = () => {
    const {firstNameInput, firstNameError} = this.state
    const className = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="label-heding" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  // update every letter to lastname field
  onChangeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastNameInput: value})
  }

  // validate lastname field
  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  // if it's false shows an error message
  onChangeBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({lastNameError: !isValidLastName})
  }

  // display the lastname field
  renderLastNameField = () => {
    const {lastNameInput, lastNameError} = this.state
    const className = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-container">
        <label htmlFor="lastname" className="label-heding">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={className}
          placeholder="Last name"
          value={lastNameInput}
          onChange={this.onChangeLastName}
          onBlur={this.onChangeBlurLastName}
        />
      </div>
    )
  }

  // form validation
  onSubmitForm = event => {
    event.preventDefault()
    // now both fields are empty shows an error message
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    // now handle the form
    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitForm: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isSubmitForm: false,
      })
    }
  }

  // display the both input fields
  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {firstNameError && <p className="error-msg">*Required</p>}
        {this.renderLastNameField()}
        {lastNameError && <p className="error-msg">*Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  // if its prevstate is not equal to present then update a new credentials
  onSubmissionSuccess = () => {
    this.setState(prevState => ({
      isSubmitForm: !prevState.isSubmitForm,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  // this function is used to display the success message
  renderSubmissionSuccess = () => (
    <>
      <div className="submission-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="success">Submitted Successfully</p>
        <button
          type="button"
          onClick={this.onSubmissionSuccess}
          className="submt-another-response"
        >
          Submit another Response
        </button>
      </div>
    </>
  )

  // here we print all the information
  render() {
    const {isSubmitForm} = this.state
    return (
      <div className="registration-form-container">
        <div className="result-container">
          <h1 className="heading">Registration</h1>
          <div>
            {isSubmitForm
              ? this.renderSubmissionSuccess()
              : this.renderRegistrationForm()}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
