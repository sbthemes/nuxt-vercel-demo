<template>
	<div>
		<form @submit.prevent="login()">
			<input type="text" v-model="args.email">
			<input type="text" v-model="args.password">
			<button>Login</button>
		</form>
		<feedback />
	</div>
</template>
<script>
	export default {
		middleware: ['auth'],
		auth: 'guest',
		data() {
			return {
				args: {
					email: 'sbthemes@gmail.com',
					password: 'shail@45371945',
				}
			}
		},
		methods: {
			async login() {
				try {
					console.log(this.args);
					await this.$auth.loginWith('laravelSanctum', { data: this.args });
				} catch {}
			}
		}
	}
</script>