<script setup>
const vRainbow ={
    mounted:(el)=>el.style.color = "#" + Math.random().toString().slice(2,8)
}
</script>
<template>
    <div id="show-blogs">
        <h1>tum blog gonderi</h1>
        <input type="text" v-model="keyword" placeholder="Search..">
        <div v-for="blog in filteredblogs"  class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id" ><h2 v-rainbow>{{buyut(blog.title)}}</h2></router-link>
            <p>{{blog.content}}</p>
        </div>
    </div>

</template>

<script>
import mixins from '../mixins'

export default {
    data(){
        return{
            blogs:[],
            keyword:""
        }
    },
    methods:{
        buyut:function(title){
            return title.toUpperCase();
        }
    },
    computed:{
        buyutComputed(){
            return(title)=>title.toUpperCase()
        },

    },
        created(){

        self=this;

        fetch("https://vue-list-1bce2-default-rtdb.firebaseio.com/posts.json",{

                method: 'GET',
                header:{
                    'Content-Type':'application/json'
                        }
                
        }).then((res)=>res.json())
        .then(function(json){ 
            var blogsArray=[];

            for (let key in json){
                json[key].id=key;
                blogsArray.push(json[key])
                self.blogs=blogsArray
            }
        console.log(json);
        
        }).catch(function(err){
            console.log(err)
        
        })
     },
     mixins:[mixins]

    }


</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }

    .single-blog{
        padding:20px;
        margin: 20px 0;
        box-sizing: border-box;
        background-color: #e2e2e2;
        border-radius: 5px;
    }

</style>