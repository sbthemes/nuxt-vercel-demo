<template>
	<div>
		<pre>{{ $auth.user }}</pre>
		<button @click="logout()">Logout</button>
		<feedback />
	</div>
</template>
<script>
	export default {
		middleware: 'auth',
		methods: {
			async logout() {
				await this.$auth.logout();
				await this.$axios.get('sanctum/csrf-cookie');
			}
		}
	}
</script>
