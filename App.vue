<script>
import tool from '@/lib/function'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(tool.priceFormat('10000',2))
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
