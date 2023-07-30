import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type PersonalInfo = {
	name: string;
	email: string;
	phone: string;
};

const defaultValue: PersonalInfo = {
	name: '',
	email: '',
	phone: ''
};

const createPersonalInfoStore = () => {
	let initialValue = defaultValue;

	if (browser) {
		const storedPersonalInfo = localStorage.getItem('personal-info');
		initialValue = storedPersonalInfo ? JSON.parse(storedPersonalInfo) : defaultValue;
	}

	const { subscribe, set } = writable<PersonalInfo>(initialValue);

	const reset = () => {
		if (browser) localStorage.removeItem('personal-info');
		set(defaultValue);
	};

	subscribe((value) => {
		if (browser) localStorage.setItem('personal-info', JSON.stringify(value));
	});

	return {
		subscribe,
		set,
		reset
	};
};

export const personalInfo = createPersonalInfoStore();
