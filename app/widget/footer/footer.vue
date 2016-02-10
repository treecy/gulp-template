<style lang='sass' scoped>
	#footer{
		p{color: red;}
	}
</style>

<template lang='jade'>
	div#footer
		p {{ content }}
</template>

<script>
	module.exports = {
		data: function () {
			 return {content: 'Hello Vue.js!'} 
		}
	}

</script>
