<template>
	<form @submit.prevent="feedback()">
		<textarea v-model="message">This is test message</textarea>
		<button>Submit</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
			}
		},
		methods: {
			async feedback() {
				try {
					await this.$axios.post('/web/feedback', { message: this.message })
				} catch {}
			}
		}
	}
</script>