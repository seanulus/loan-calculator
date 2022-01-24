import React, { useState } from 'react';
import Input from '../input/input';
import './Signup.css'

export default function Signup() {

	const [state, updateState] = useState({
		email: null,
		password: null,
		confirmPassword: null,
		error: null
	})

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		updateState(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const validateAndSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()

		console.log(state);
	}

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
						<button type='submit'>Submit</button>
			</form>
		</div>

	)
}
