import React from 'react'
import { withRouter } from "react-router" 
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            age: '',
            location: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemo = this.loginDemo.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleField(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    loginDemo(e) {
        e.preventDefault()
        this.props.loginDemo({
            email: "test@example.com",
            password: "password"
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    renderErrors() {
        if (this.props.errors.session.length !== 0) {
        return (
        <ul>
            {this.props.errors.session.map((error, idx) => (
                <li className="session-error" key={`error-${idx}`}>
                    {error}
                </li>
            ))}
        </ul>
        )
        }
    }

    render() {
        if (this.props.formType === "login") {
            return (
                <div>
                    <div className="header">
                        <Link className="title" to="/">TacoBoutIt</Link>
                    </div>
                    <div className="session-form">
                        <div className="sign-in-wrapper"> 
                            <div className="sign-in-for">Log in to TacoBoutIt</div>
                            <div className="new-signin">New To TacoBoutIt? <span><Link className="signup-link" to="/signup">Sign up!</Link></span></div>
                            <div className="terms">By logging in, you agree to TacoBoutIt's Terms of Service and Privacy Policy.</div>
                            <div className="demo-login" onClick={this.loginDemo}>Demo User</div>
                            <div>
                                <fieldset className="sep-line">
                                    <legend align="center">
                                        OR
                                        </legend>
                                </fieldset>
                            </div>
                            {this.renderErrors()}
                            <form onSubmit={this.handleSubmit}>
                                <div className="sign-in-form">
                                    <div>
                                        <input type="email"
                                            value={this.state.email}
                                            onChange={this.handleField('email')}
                                            placeholder="Email"
                                        />
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.handleField('password')}
                                            placeholder="Password"
                                        />
                                        <button className="click-login" type="submit" value={this.props.formType}>{this.props.formType}</button>
                                        <div className="bottom-new-sign-up">New To TacoBoutIt? <span><Link className="signup-link" to="/signup">Sign up!</Link></span></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="classy-image">
                            <img src={window.classyImage} alt="A Classy Image" />
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <div>
                    <div className="header">
                        <Link className="title" to="/">TacoBoutIt</Link>
                    </div>
                    <div className="session-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="sign-up-wrapper">
                                <h3 className="sign-up-for">Sign Up for TacoBoutIt</h3>
                                <div className="sign-up-subhead">Connect with great local businesses</div>
                                <div className="terms">By continuing, you agree to TacoBoutIt's Terms of Service and acknowledge TacoBoutIt's Privacy Policy.</div>
                                <div className="demo-signup" onClick={this.loginDemo}>Demo User</div>
                                <div>
                                    <fieldset className="sep-line">
                                        <legend align="center">
                                        OR 
                                        </legend>
                                    </fieldset>
                                </div>
                                {this.renderErrors()}
                                <div className="sign-up-form">
                                    <div className="sign-up-name">
                                        <input type="text"
                                            value={this.state.first_name}
                                            onChange={this.handleField('first_name')}
                                            placeholder="First Name"
                                        />
                                        <input type="text"
                                            value={this.state.last_name}
                                            onChange={this.handleField('last_name')}
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="sign-up-email">
                                        <input type="text"
                                            value={this.state.email}
                                            onChange={this.handleField('email')}
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="sign-up-password">
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.handleField('password')}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="sign-up-age">
                                        <input type="number"
                                            value={this.state.age}
                                            onChange={this.handleField('age')}
                                            placeholder="Age"
                                        />
                                    </div>
                                    <div>
                                        <select className="signup-location-select" value={this.state.location} onChange={this.handleField('location')}>
                                                <option value="" disabled selected>Location</option>
                                                <option value="San Francisco">San Francisco</option>
                                                <option value="Portland">Portland</option>
                                                <option value="Seattle">Seattle</option>
                                                <option value="Los Angeles">Los Angeles</option>
                                        </select>
                                    </div>
                                    <button className="click-signup" type="submit" value={this.props.formType}>{this.props.formType}</button>
                                    <div className="already-exists">Already on TacoBoutIt? <Link className="login-link" to="/login">Log in</Link></div>
                                </div>
                            </div>
                        </form>
                        <div className="classy-image">
                            <img src={window.classyImage} alt="A Classy Image" />
                        </div>
                    </div>
                </div>
            )
        }   
    }
}

export default withRouter(SessionForm)