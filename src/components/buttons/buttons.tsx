import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	color?: string;
	textColor?: string;
	borderColor?: string;
	fullWidth?: boolean;
}

export interface CurvedButtonProps extends ButtonProps {
	radius?: number;
}

export const Button: React.FC<ButtonProps> = ({ children, className, color, textColor, style, borderColor, fullWidth = false, ...props }) => {
	const _style: React.CSSProperties = style || {};
	const classes = twMerge('p-4', className);

	if (color) _style.backgroundColor = color;
	if (textColor) _style.color = textColor;
	if (borderColor) _style.borderColor = borderColor;
	_style.borderWidth = '1px';

	if (fullWidth) _style.width = '100%';

	return (
		<button className={classes} style={_style} {...props}>
			{children}
		</button>
	);
};

export const OutlineButton: React.FC<ButtonProps> = ({ children, className, color, textColor, fullWidth, ...props }) => {
	const classes = twMerge('', className);
	return (
		<Button className={classes} color={'transparent'} borderColor={color} textColor={textColor} fullWidth={fullWidth} {...props}>
			{children}
		</Button>
	);
};

export const CurvedButton: React.FC<CurvedButtonProps> = ({ children, className, radius, color, textColor, fullWidth, ...props }) => {
	const classes = twMerge(`rounded-[${radius}]`, className);
	return (
		<Button className={classes} color={color} textColor={textColor} {...props} fullWidth={fullWidth}>
			{children}
		</Button>
	);
};
