import React, { useState } from 'react';
import Input from '../input/input';
import './Landing_Page.css'

export default function Landing() {

	const [state, updateState] = useState({
		price: null,
		make: null,
		model: null,
		income: null,
		credit: null
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
					min='0'
					max='1000000'
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
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}