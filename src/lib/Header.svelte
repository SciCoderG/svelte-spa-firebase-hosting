<script lang="ts">
	import { getAuth, onAuthStateChanged, type Auth, type User } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { login, logout } from './firebase';

	class NavBarItem {
		display: string;
		route: string;
		/**
		 * @param {string} name
		 * @param {string} route
		 */
		constructor(display: string, route: string) {
			this.display = display;
			this.route = route;
		}
	}

	let user: User | null;
	onMount(async () => {
		const auth: Auth = getAuth();
		onAuthStateChanged(auth, (newUser) => {
			user = newUser;
			console.log('On Auth State Change was called.');
			if (null !== user) console.log(`User name: ${user?.displayName}, mail: ${user?.email}`);
		});
	});

	function handleLogin() {
		login();
	}

	function handleLogout(event: any) {
		logout();
	}
</script>

<div
	class="navbar fixed z-50 top-0 transition-all duration-100 shadow-md text-primary-content bg-primary"
	transition:fade
>
	<div class="navbar-start" />
	<div class="navbar-center text-xs" />

	<div class="navbar-end" />
	{#if !user}
		<button class="btn btn-primary" on:click={handleLogin}>Anmeldung</button>
	{:else}
		<div class="dropdown dropdown-end text-base-content">
			<label for="profile-dropdown" tabindex="-1" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img alt="profile-pricture" src={user?.photoURL} />
				</div>
			</label>
			<ul
				id="profile-dropdown"
				tabindex="-1"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li class="mx-4 ">Logged in as {user?.displayName}</li>
				<li class="mx-4 text-xs">{user?.email}</li>
				<li><button on:click={handleLogout}>Logout</button></li>
			</ul>
		</div>
	{/if}
</div>
