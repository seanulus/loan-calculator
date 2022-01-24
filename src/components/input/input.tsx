import React from 'react';
import './Input.css';

type InputProps = {
	for: string
	label: string
	type: string
	name: string
	id: string
	min: string
	max:string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	return(
		<>
		<label htmlFor={props.for}>{props.label}</label>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				min={props.min}
				max={props.max}
				onChange={props.onChange}
			/>
		</>
	)
}