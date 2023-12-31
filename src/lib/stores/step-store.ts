import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const createStepStore = () => {
	let initialStep = 1;

	if (browser) {
		const storedStep = localStorage.getItem('step');
		initialStep = storedStep ? JSON.parse(storedStep) : 1;
	}

	const { subscribe, update, set } = writable<number>(initialStep);

	const updateStep = (action: 'inc' | 'dec' | 'res') =>
		update((step) => {
			const newStep =
				action === 'inc' && step < 5 ? step + 1 : action === 'dec' && step > 1 ? step - 1 : 1;
			if (browser) localStorage.setItem('step', JSON.stringify(newStep));
			return newStep;
		});

	const backToPlanStep = () => {
		if (browser) localStorage.setItem('step', JSON.stringify(2));
		set(2);
	};

	return {
		subscribe,
		updateStep,
		backToPlanStep
	};
};

export const step = createStepStore();
