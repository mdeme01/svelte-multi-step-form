import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Addon = {
	id: 'online_service' | 'larger_storage' | 'custom_profile';
	props: {
		name: string;
		desc: string;
		monthlyPrice: number;
		yearlyPrice: number;
	};
};

type Plan = {
	id: 'arcade' | 'advanced' | 'pro';
	props: {
		name: string;
		monthlyPrice: number;
		yearlyPrice: number;
	};
};

type Subscription = {
	plan: Plan;
	addons: Addon[];
	billing: 'monthly' | 'yearly';
};

const addons: Addon[] = [
	{
		id: 'online_service',
		props: {
			name: 'Online service',
			desc: 'Access to multiplayer games',
			monthlyPrice: 1,
			yearlyPrice: 10
		}
	},
	{
		id: 'larger_storage',
		props: {
			name: 'Larger storage',
			desc: 'Extra 1TB of cloud save',
			monthlyPrice: 2,
			yearlyPrice: 20
		}
	},
	{
		id: 'custom_profile',
		props: {
			name: 'Customizable profile',
			desc: 'Custom theme on your profile',
			monthlyPrice: 2,
			yearlyPrice: 20
		}
	}
];

const plans: Plan[] = [
	{ id: 'arcade', props: { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 } },
	{ id: 'advanced', props: { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 } },
	{ id: 'pro', props: { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 } }
];

const defaultValue: Subscription = {
	plan: plans[0],
	addons: [],
	billing: 'monthly'
};

const createPlanStore = () => {
	let initialPlan = defaultValue;

	if (browser) {
		const storedPlan = localStorage.getItem('subscription');
		initialPlan = storedPlan ? JSON.parse(storedPlan) : defaultValue;
	}

	const { subscribe, update } = writable<Subscription>(initialPlan);

	const changePlan = (plan: Plan) =>
		update((value) => {
			const newSubscription = { plan, addons: value.addons, billing: value.billing };
			if (browser) localStorage.setItem('subscription', JSON.stringify(newSubscription));
			return newSubscription;
		});

	const changeAddOns = (addons: Addon[]) =>
		update((value) => {
			const newSubscription = { plan: value.plan, addons, billing: value.billing };
			if (browser) localStorage.setItem('subscription', JSON.stringify(newSubscription));
			return newSubscription;
		});

	const changeBilling = (billing: 'monthly' | 'yearly') =>
		update((value) => {
			const newSubscription = { plan: value.plan, addons: value.addons, billing };
			if (browser) localStorage.setItem('subscription', JSON.stringify(newSubscription));
			return newSubscription;
		});

	return {
		subscribe,
		changePlan,
		changeAddOns,
		changeBilling
	};
};

const subscription = createPlanStore();

export { addons, plans, subscription };
