import Main from '@/views/Main.vue';

//登录
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    //---------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        path:'/website',
        icon:'earth',
        title:'网站管理',
        name:'website',
        component:Main,
        children:[
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path:'/member',
        icon:'android-person',
        title:'会员管理',
        name:'member',
        component:Main,
        children:[
        	{ path: 'member-list', title: '全部会员', name: 'member-list', icon: 'navicon-round', component: () => import('@/views/advanced-router/mutative-router.vue') },
        	{ path: 'member-add', title: '新增会员', name: 'member-add', icon: 'person-add', component: () => import('@/views/form/article-publish/article-publish.vue') },
           
        ]
    },
    {
        path:'/article',
        icon:'ios-paper',
        title:'文章管理',
        name:'artile',
        component:Main,
        children:[
            { path: 'article-list', title: '全部文章', name: 'article-list', icon: 'navicon-round', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'article-publish', title: '新增文章', name: 'article-publish', icon: 'compose', component: () => import('@/views/article/article-add.vue') },
            { path: 'article-category', title: '分类目录', name: 'article-category', icon: 'pound', component: () => import('@/views/advanced-router/argument-page.vue') },
            { path: 'article-tages', title: '文章标签', name: 'article-tages', icon: 'pricetags', component: () => import('@/views/advanced-router/argument-page.vue') }

        ]
    },
    {
        path:'/comment',
        icon:'chatbubbles',
        title:'评论管理',
        name:'comment',
        component:Main,
        children:[
            { path: 'comment-list', title: '全部评论', name: 'comment-list', icon: 'navicon-round', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'comment-setting', title: '评论设置', name: 'comment-setting', icon: 'settings', component: () => import('@/views/advanced-router/mutative-router.vue') },
        ]

    },
    {
        path:'/media',
        icon:'videocamera',
        title:'媒体管理',
        name:'media',
        component:Main,
        children:[
            { path: 'media-list', title: '媒体库', name: 'media-list', icon: 'navicon-round', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'media-add', title: '添加', name: 'media-add', icon: 'upload', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path:'/statistic',
        icon:'pie-graph',
        title:'统计管理',
        name:'statistic',
        component:Main,
        children:[
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/access',
        icon: 'unlocked',
        title: '权限管理',
        name: 'access',
        component: Main,
        children: [
            { path: 'access-users', title: '管理员管理', name: 'access-users', icon: 'navicon-round',component: () => import('@/views/access/access.vue') },
            { path: 'access-users-add', title: '新增管理员', name: 'access-users-add', icon: 'ios-personadd',component: () => import('@/views/access/access.vue') },
            { path: 'access-group', title: '部门管理', name: 'access-group', icon: 'ios-people',component: () => import('@/views/access/access.vue') },

        ]
    },
     {
        path:'/setting',
        icon:'android-settings',
        title:'系统设置',
        name:'setting',
        component:Main,
        children:[
            { path: 'mutative-router', title: '常规设置', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'mutative-router', title: '微信设置', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '邮件设置', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
