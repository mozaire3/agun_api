import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyComments from '@/views/MyComments.vue'
import CreateComment from '@/views/CreateComment.vue'
import EditComment from '@/views/EditComment.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import AComment from '@/views/AComment.vue'
import NotFound from '@/views/NotFound.vue'
import CommentsView from '@/views/CommentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignupView
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView
    },
    {
      path: '/mycomments',
      name: 'mycomments',
      component: MyComments
    },
    {
      path: '/comment/:id',
      name: 'home',
      component: AComment
    },
    {
      path: '/comments/edit/:id',
      name: 'editcomment',
      component: EditComment
    },
    {
      path: '/comments/create',
      name: 'createcomment',
      component: CreateComment
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound
    }
  
  
  ]
})

export default router
