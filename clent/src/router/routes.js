import Home from '@/containers/home/home';
import Index from '@/containers/home/index';
import Order from '@/containers/home/order';
import Finance from '@/containers/home/finance';
import Login from '@/containers/user/login';
import User from '@/containers/user/index';
import Upload from '@/containers/user/upload';

export default [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path:"/home/index",
        name:"index",
        component:Index
    }, {
        path: "/home/order",
        name: "order",
        component: Order
    }, {
        path: "/home/finance",
        name: "finance",
        component: Finance
    }],
  
    },
    {
    path: '/user',
    name: 'user',
    component: User,
    children:[
        {
        path:'/user/login',
        name:'login',
        component:Login
        }, 
        {
        path: '/user/upload',
        name: 'upload',
        component: Upload
       }]
}]