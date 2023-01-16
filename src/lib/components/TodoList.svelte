<script lang="ts">
	import { addDoc, collection } from 'firebase/firestore';
	import { user } from '$lib/stores';
	import TodoItem from './TodoItem.svelte';
	import { db } from '$lib/firebase';

	class TodoModel {
		title: string;

		description: string;

		constructor(title: string, description: string) {
			this.title = title;
			this.description = description;
		}
	}
	export const todoCollection = collection(db, 'Todos');

	async function addTodo() {
		const newTodo = await addDoc(todoCollection, {
			title: 'Test',
			description: 'Test',
			isDone: false,
			uid: $user?.uid
		});
	}
</script>

<div class="">
	<div class="p-6">
		<h1 class="text-center text-3xl font-bold uppercase">
			{#if $user}
				{$user?.displayName}'s
			{/if} Todos
		</h1>
	</div>

	<table class="table w-full border-separate table-compact p-1 md:p-3">
		<tbody>
			<!-- row 1 -->
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</tbody>
	</table>
</div>
