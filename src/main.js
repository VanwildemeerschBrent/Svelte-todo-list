import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'SVELTE TODO APP'
	}
});

export default app;