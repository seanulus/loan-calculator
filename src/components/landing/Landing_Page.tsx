import React, { useState } from 'react';
import Input from '../input/input';
import { useNavigate } from 'react-router-dom';
import './Landing_Page.css'

export default function Landing() {
	// I used state in this instance since we didn't have a need to use the data across components.
	const [state, updateState] = useState({
		price: '',
		make: null,
		model: null,
		income: '',
		credit: '',
		error: ''
	})

	const navigate = useNavigate()

	// I could stand to refactor this onChange function being passed into each input by using the
	// onChange handler in the form attributes, possibly cleaning up the code a bit.
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		updateState(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const validateAndSubmit = async(e: React.SyntheticEvent) => {
		e.preventDefault()
		// reset error state
		updateState(prevState => ({
			...prevState,
			error: ''
		}))

		if(parseInt(state.price, 10) > parseInt(state.income, 10) / 5 || parseInt(state.credit, 10) < 600) {
			// In lieu of an actual fetch call, I've opted to return rejected or resolved promise to simulate the async nature of a call to the server.
			// I would refactor this section in order to better handle a server call using fetch.
			await Promise.reject('Based on the provided information, you are not currently qualified for this loan.')
			// Users should not be able to navigate back to the loan application screen from here
			// using the replace attribute. 
			navigate('/disqualified', { replace: true });
		} else if(parseInt(state.price) > 1000000) {
			await Promise.reject('Bad Request')
			updateState(prevState => ({
				...prevState,
				error: 'We cannot accommodate pricing over $1,000,000. Please lower the price amount.'
			}))
		} else {
			await Promise.resolve(state)
			navigate('/signup')
		}
	}

	return(
		<div className='landing'>
			<h2>Auto Loan Calculator</h2>
			<h6>Terms:</h6>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Sit amet risus nullam eget felis eget nunc lobortis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Sagittis nisl rhoncus mattis rhoncus urna neque. A arcu cursus vitae congue mauris rhoncus aenean vel. Phasellus vestibulum lorem sed risus. Mauris vitae ultricies leo integer malesuada nunc. Risus nec feugiat in fermentum posuere urna nec. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Nibh praesent tristique magna sit amet purus gravida quis blandit. Facilisis leo vel fringilla est ullamcorper.</p>
			<form onSubmit={(event) => validateAndSubmit(event)}>
				<Input 
					for='price'
					label='Auto Purchase Price' 
					name='price' 
					type='number'
					id='price'
					min=''
					max=''
					onChange={(e) => onChange(e)}
				/>
				<Input 
					for='make'
					label='Auto Make' 
					name='make' 
					type='text'
					id='make'
					min=''
					max=''
					onChange={(e) => onChange(e)}
				/>
				<Input 
					for='model'
					label='Auto Model' 
					name='model' 
					type='text'
					id='model'
					min=''
					max=''
					onChange={(e) => onChange(e)}
				/>
				<Input 
					for='income'
					label='User Estimated Yearly Income' 
					name='income' 
					type='number'
					id='income'
					min=''
					max=''
					onChange={(e) => onChange(e)}
				/>
				<Input 
					for='credit'
					label='User Estimated Credit Score' 
					name='credit' 
					type='number'
					id='credit'
					min='300'
					max='850'
					onChange={(e) => onChange(e)}
				/>
				<p className='error-text'>{state.error}</p>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}