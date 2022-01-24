import React, { useState } from 'react';
import Input from '../input/input';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

export default function Signup() {

	const [state, updateState] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		error: ''
	});

	const navigate = useNavigate();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		updateState(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const validateAndSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		// reset error state
		updateState(prevState => ({
			...prevState,
			error: ''
		}));

		// Regex to check for at least 8 characters, 1 number, 1 special character and one uppercase character
		const passwordRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
		const isValid = passwordRegex.test(state.password)

		if(state.password !== state.confirmPassword) {
			updateState(prevState => ({
				...prevState,
				error: 'Your passwords do not match. Please try again.'
			}))
		} else if(!isValid) {
			updateState(prevState => ({
				...prevState,
				error: 'Your password needs to be at least 8 characters with one number, one special character and one uppercase letter.'
			}))
		} else {
			navigate('/dashboard');
		}
	}

	// I opted to use the email type input in the return, as a seemingly large number of regex solutions can't account for all email validation scenarios.
	// I also decided to name the field email, as username might be a bit confusing from a user perspective when email is what we're testing against.

	return (
		<div className='signup'>
			<h2>Create Your Account</h2>
			<form onSubmit={(e) => validateAndSubmit(e)}>
				<Input 
							for='email'
							label='Email' 
							name='email' 
							type='email'
							id='email'
							min=''
							max=''
							onChange={(e) => onChange(e)}
						/>
						<Input 
							for='password'
							label='Password' 
							name='password' 
							type='password'
							id='password'
							min=''
							max=''
							onChange={(e) => onChange(e)}
						/>
						<Input 
							for='confirmPassword'
							label='Confirm Password' 
							name='confirmPassword' 
							type='password'
							id='confirmPassword'
							min=''
							max=''
							onChange={(e) => onChange(e)}
						/>
						<p className='error-text'>{state.error}</p>
						<button type='submit'>Submit</button>
			</form>
		</div>

	)
}
