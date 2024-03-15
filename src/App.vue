<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style >
	/*每个页面公共css */

	.uni-data-checklist .checklist-group .checklist-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 5px 15px !important;
    /* margin-right: 25px; */
}
	
	.uni-data-checklist .checklist-group .checklist-box .checkbox__inner {
		border-radius: 50% !important;
	}
</style>
