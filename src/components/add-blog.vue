<template>
    <div id="add-blog">
        <h2 v-if="!submitted">Add-Blog</h2>
        <form v-if="!submitted" action="#">
            <label for="title">Form</label>
            <input type="text" v-model.lazy="blog.title" required>

            <label for="content" >Blog content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Comic book</label>
                <input type="checkbox" value="comic book" v-model="blog.categories">
                <label>Story</label>
                <input type="checkbox" value="Story" v-model="blog.categories" >
                <label>Fairytale</label>
                <input type="checkbox" value="Fairytale" v-model="blog.categories">
                <label>Poem</label>
                <input type="checkbox" value="Poem" v-model="blog.categories">

            </div>
            <label for="author">Author:</label>
            <select v-model="blog.author">
                <option value="">Author</option>
                <option v-for="author in authors" v-bind:value="author">{{ author }}</option>
            </select>
            <p><button v-on:click.prevent="gonder">Add blogs</button></p>
        </form>
        <div v-if="submitted">tebrikler <button v-on:click="newblog">Add New blog</button></div>
        <div id="preview" v-if="!submitted">
            <h3>Blog Information</h3>
            <p>Form {{ blog.title }}</p>
            <p>Blog content {{ blog.content }}</p>
            <p>Author:{{ blog.author }}</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
        </div>
    </div>
</template>

<script >
export default{
  data(){
    return{
        blog:{
        title:"",
        content:"",
        categories:[],
        author:""
       },
       authors:["A","B","C","D","E"],
       submitted:false
      
    }
  },
   methods:{
    gonder:function () {

        self=this,

        fetch("https://vue-list-1bce2-default-rtdb.firebaseio.com/posts.json",{

            method: 'POST',
            header:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.blog)
                
            
            }).then((res)=>res.json())
           .then(function(json){
            console.log(json)
            self.submitted=true;
           }).catch(function(err){
            console.log(err)
            self.submitted=false;
           })
    },
    newblog: function(){
        this.submitted=false;
    }
   }
}

</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 15px;

}
#checkboxes label{
    display: inline-block;
}

</style>
