<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { user } from '$lib/stores';
	import '$lib/tailwind.css';
	import { getAuth, onAuthStateChanged, type Auth } from 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(async () => {
		const auth: Auth = getAuth();
		onAuthStateChanged(auth, (newUser) => {
			user.set(newUser);
		});
	});
</script>

<svelte:head>
	<title>U9 Todos</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Header />

<body>
	<slot />
</body>
