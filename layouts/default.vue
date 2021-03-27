<template>
	<div>
		<Nuxt />
	</div>
</template>
<script>
	export default {
		mounted() {
			this.csrf();
		},
		methods: {
			async csrf() {
				try {
					await this.$axios.get('sanctum/csrf-cookie');
				} catch {}
			}
		}
	}
</script>
