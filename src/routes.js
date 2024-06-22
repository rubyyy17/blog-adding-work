import { createRouter, createWebHistory} from 'vue-router'
import ShowBlog from './components/show-blogs.vue'
import AddBlog from './components/add-blog.vue'
import SingleBlog from './components/single-blog.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/', component:ShowBlog},
        { path:'/ekle', component:AddBlog},
        { path:'/blog/:id', component:SingleBlog},

    ]
});

export default router