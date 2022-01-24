import React from 'react';
import Input from '../input/input';
import './Landing_Page.css'

export default function Landing() {
	return(
		<div className='landing'>
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

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	console.log(e.currentTarget.value)
}

const validateAndSubmit = (e: React.SyntheticEvent) => {
	e.preventDefault()

	console.log('submit')
}