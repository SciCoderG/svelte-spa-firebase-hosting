<script>
	import AddTodo from '$lib/components/AddTodo.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
</script>

<div class="grid place-items-center pt-6 gap-6 mb-6">
	<div class="card xs:min-h-screen md:w-3/4 shadow-xl card-bordered w-full">
		<div class="card-body">
			<TodoList />
		</div>
	</div>
	<div class="card md:w-3/4 shadow-xl card-bordered w-full">
		<div class="card-body">
			<AddTodo />
		</div>
	</div>
</div>
