import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	color?: string;
	textColor?: string;
	borderColor?: string;
}

export interface CurvedButtonProps extends ButtonProps {
	radius?: number;
}

export const Button: React.FC<ButtonProps> = ({ children, className, color, textColor, style, borderColor, ...props }) => {
	const _style: React.CSSProperties = style || {};
	const classes = twMerge('p-2', className);

	if (color) _style.backgroundColor = color;
	if (textColor) _style.color = textColor;
	if (borderColor) _style.borderColor = borderColor;

	return (
		<button className={classes} style={_style} {...props}>
			{children}
		</button>
	);
};

export const OutlineButton: React.FC<ButtonProps> = ({ children, className, color }) => {
	const classes = twMerge('', className);
	return (
		<Button className={classes} color={'transparent'} borderColor={color}>
			{children}
		</Button>
	);
};

export const CurvedButton: React.FC<CurvedButtonProps> = ({ children, className, radius }) => {
	const classes = twMerge(`rounded-[${radius}]`, className);
	return <Button className={classes}>{children}</Button>;
};
