export default{
    computed:{
        filteredblogs(){
        return this.blogs.filter(blog=>blog.title.match(this.keyword))
    }
}
}