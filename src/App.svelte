<script>
	export let name;
	import TaskList from "./tasklist.svelte";
</script>

<main>
	<h1>{name}</h1>
	<TaskList />
</main>

<style>
	main {
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
