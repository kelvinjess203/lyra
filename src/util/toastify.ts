import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import theme from '../theme';

const toastContainerStyle = {
	backgroundColor: 'rgba(2,12,32,0.9)',
	borderRadius: `${theme.borderRadius}px`,
};

const toastErrorContainerStyle = {
	...toastContainerStyle,
	border: `1px solid ${theme.color.error}`,
	fontWeight: 'bold',
	color: theme.color.error,
	backgroundColor: theme.card.background,
	backdropFilter: 'blur(10px)'
};

function _showToast(content: string | React.FC, config?: ToastOptions, isError = false) {
	return toast(content, {
		style: isError ? toastErrorContainerStyle : toastContainerStyle,
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		...config,
	});
}

export const Toast = {
	show: (content: string | React.FC, config?: ToastOptions) => {
		return _showToast(content, config);
	},
	error: (content: string | React.FC, config?: ToastOptions) => {
		return _showToast(`❌ ${content}`, config, true);
	},
	dismiss: (toastId: React.ReactText) => {
		toast.dismiss(toastId);
	},
	showInfinityToast: (content: string | React.FC) =>
		_showToast(content, {
			autoClose: false,
			closeOnClick: false,
			closeButton: false,
		}),
	showPendingToast: (content: string | React.FC, duration: number, config?: ToastOptions) =>
		_showToast(content, {
			closeOnClick: false,
			closeButton: false,
			autoClose: duration,
			...config,
		}),
};
