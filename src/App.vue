<template>
  <div id="app">
    <v-header></v-header>
    <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view>
  </div>
</template>

<script src="echarts.min.js"></script>
<script>
/**
 * description app.vue
 */
import vHeader from './components/public/header'
import $ from 'jquery'

export default {
	name: 'app',
	components: {
	  vHeader
	},
  	provide () {    //组件中通过provide来提供变量，在子组件中通过inject来注入变量。                   
	    return {
	        reload: this.reload                                              
	    }
	},
	data() {
	    return{
	        isRouterAlive: true                    //控制视图是否显示的变量
	    }
	},
	methods: {
	    reload () {
	        this.isRouterAlive = false;            //先关闭，
	        this.$nextTick(function () {
	            this.isRouterAlive = true;         //再打开
	        }) 
	    }
	},

}
</script>

<style lang="scss">
@import "style/app";
</style>