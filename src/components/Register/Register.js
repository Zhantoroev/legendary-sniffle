import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                name: '',
                school: '',
                grade: '',
                address: '',
                email: '',
                password: '',
                phoneNumber: '',
                birthDay: '',
                gender:'',
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
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                birthDay: this.state.birthDay,
                gender: this.state.gender,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                school: this.state.school,
                grade: this.state.grade,
            })
        })
        this.props.onRouteChange('home')
    }

    render() {
        return (
            <article className="br3 ba b--white-10 tc mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="register" className="ba b--transparent ph0 mh0 center">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name" 
                                onChange = {this.onNameChange}
                            />
                        </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email"
                                    name="email-address"  
                                    id="email-address" 
                                    onChange = {this.onEmailChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange = {this.onPasswordChange}
                                />
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="birthday">Birthday</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="date" 
                                    name="birthDay"  
                                    id="birthDay" 
                                    onChange = {this.onBirthDayChange}
                                />
                            </div>

                            <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="gender">Gender</label>
                                <div className="w-100 dib" >
                                    <label for="male" style={{position:'absolute'}}>Male</label>
                                    <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-blue w-50" 
                                        type="radio" name="gender"
                                        id="male" value="Male"
                                        onChange = {this.onGenderChange}
                                    />
                                    <label for="female" style={{position:'absolute'}}>Female</label>
                                    <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-red w-50 h" 
                                        type="radio" 
                                        name="gender"  
                                        id="femail" 
                                        value="Female"
                                        onChange = {this.onGenderChange}
                                    />
                                </div>
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text"
                                    name="text"
                                    id="address"
                                    onChange = {this.onAdressChange}
                                />
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="phoneNumber">PhoneNumber</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="number" 
                                    name="phoneNumber"  
                                    id="phoneNumber" 
                                    onChange = {this.onPhoneNumberChange}
                                />
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="schoolName">School</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="school"  
                                    id="school" 
                                    onChange = {this.onSchoolChange}
                                />
                            </div>
                            {/* GRADE */}
                            <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="grade">Grade</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="grade"  
                                id="grade" 
                                onChange = {this.onGradeChange}
                            />
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

export default Register;