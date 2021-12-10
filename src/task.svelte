<script>
    export let id;
    export let title;
    export let done;

    function handleClick() {
        done = !done;
    }
</script>

<div class="task">
    <p>{title}</p>
    <button on:click={handleClick}>
        {#if !done}Complete{:else} Incomplete {/if}</button
    >
</div>

<style>
    .task {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
    }
    .task:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    button {
        background: transparent;
        color: #ff3e00;
        border: none;
        margin: 0 1rem;
        cursor: pointer;
        padding: 0.4rem;
    }

    button:hover {
        background: #ff3e00;
        color: white;
    }
</style>
