import React from 'react';
import FormInput from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import CustomButton from "../custom-button/custom-button.compnent";
import {ButtonBarWrapper, OptionLink, PTag, SignInTitle, SignInWrapper, SignUpWrapper} from "./sign-in.style";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  };

  render() {
    return (
      <SignInWrapper>
        <SignInTitle>I already have an account</SignInTitle>
        <PTag>Sign in with your email and password</PTag>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonBarWrapper>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign In
            </CustomButton>
          </ButtonBarWrapper>
          <SignUpWrapper>Don't have an account?
            <OptionLink to='/signup'>{''}Sign Up</OptionLink>
          </SignUpWrapper>
        </form>
      </SignInWrapper>
    );
  }
}

export default SignIn;
