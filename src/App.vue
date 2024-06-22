
<template>
  <div>
    <app-header></app-header>
  <router-view></router-view>
 </div>
</template>

<script >
import Addblog from './components/add-blog.vue'
import Showblogs from './components/show-blogs.vue'
import Listblogs from './components/list-blogs.vue'
import Header from './components/header.vue'



export default{
      components:{
        "add-blog":Addblog,
        "show-blogs":Showblogs,
        "list-blogs":Listblogs,
        "app-header":Header
      },
  data(){
    return{
      
    }
  }
}

</script>

<style scoped>

</style>
