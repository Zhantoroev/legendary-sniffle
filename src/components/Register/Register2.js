import { Component } from 'react';

class Register2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                speciality: '',
                gender: '',
                address: '',
                phoneNumber: '',
                companyName: '',
                companyAddress: ''
            }
        }
    }

    handleInputChange = (e) =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value },
        });

    onRegisterSubmit = () => {
        if(!this.state.name || !this.state.email || !this.state.password){
            return alert("please, fill out all fields")
        }
        fetch('https://localhost:5432/register', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                speciality: this.state.speciality,
                gender: this.state.gender,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                companyName: this.state.companyName,
                companyAddress: this.state.companyAddress,
            })
        })
        this.props.onRouteChange('home')
    }

    render() {
        return (
            <article className="br3 ba bg-white-10 b--black-20 tc mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="register" className="ba b--transparent ph0 mh0 center">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 fw5 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="text" 
                                    name="firstName"  
                                    id="firstName" 
                                    onChange = {this.handleInputChange}
                                />
                            </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="LastName">Last Name</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100"
                                    type="text" 
                                    name="lastName" 
                                    id = "lastName"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="email">Email</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="email" 
                                    name="email" 
                                    id = "email"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>
                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="password">Password</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id = "password"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="mt3">
                                <label className="db bg-transparent fw6 lh-copy f6"for="speciality">Speciality</label>
                                <select 
                                    type="text" 
                                    name="speciality" 
                                    id = "speciality"
                                    onChange={this.handleInputChange}
                                    required
                                >
                                    <option>option1</option>
                                    <option>option2</option>
                                    <option>option3</option>
                                    <option>option4</option>
                                    <option>option5</option>
                                    <option>option6</option>
                                    <option>Other</option>
                                </select>
                                </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="gender">Gender</label>
                                <div class="gender">
                                    <input type="radio" name="gender" id = "male" onChange={this.handleInputChange}/>
                                    <label for="male">Male</label>
                                    <input type="radio" name="gender" id = "female" onChange={this.handleInputChange}/>
                                    <label for="female">FeMale</label>
                                </div>
                                </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="address">Address</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="text" 
                                    name="address" 
                                    id = "address"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="phoneNumber">Phone Number</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="number" 
                                    name="phoneNumber" 
                                    id = "phoneNumber"
                                    pattern="[0-9]{10}"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="mt3">
                                <label className="db fw6 lh-copy f6"for="companyName">Company name</label>
                                <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                                    type="text" 
                                    name="companyName" 
                                    id = "companyName"
                                    required
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="mt3">
            <label className="db fw6 lh-copy f6"for="companyAddress">Company address</label>
              <input className="pa2 b--black input-reset ba bg-transparent hover-bg-dark-green hover-white w-100" 
                type="text" 
                name="companyAddress" 
                id = "companyAddress"
                required
                onChange={this.handleInputChange}/>
            </div>
                            </fieldset>
                            <div className="mt2">
                                <input 
                                    onClick={this.onRegisterSubmit}
                                    className="b ph3 pv2 black input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit" value="Register" 
                                />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register2;