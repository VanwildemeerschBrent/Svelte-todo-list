<script>
    import Task from "./task.svelte";
    let newTask = "";
    let tasks = [
        { title: "Task 1", done: false },
        { title: "Task 2", done: false },
        { title: "Task 3", done: false },
        { title: "Task 4", done: false },
        { title: "Task 5", done: false },
    ];

    $: sortedTasks = tasks.sort((a, b) => a.done - b.done);
    function addTask() {
        tasks = [
            ...tasks,
            {
                title: newTask,
                done: false,
            },
        ];

        newTask = "";
    }
</script>

{#each sortedTasks as task}
    <Task {...task} />
{/each}
<input bind:value={newTask} type="text" placeholder="New task" />
<button on:click={addTask}>+ Add task</button>

<style>
    input {
        width: 100%;
        margin: 1rem 0;
    }
    button {
        background: #ff3e00;
        color: white;
        border: none;
        margin: 0.5rem 0;
        cursor: pointer;
        padding: 1rem;
        border: 1px solid #ff3e00;

        width: 100%;
        text-align: center;
    }

    button:hover {
        border: 1px solid #ff3e00;
        background: transparent;
        color: #ff3e00;
    }
</style>
