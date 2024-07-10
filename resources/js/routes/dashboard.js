import admin from '@/middleware/admin'
export default [
	{
        path: '/dashboard',
        name: 'auth.panel',
        component: () => import('@/views/Panel.vue'),
    },
    {
        path: '/panel',
        name: 'auth.dashboard',
        redirect: { name: 'auth.panel' }
    },
    {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('@/views/Profile.vue'),
    },
    {
        path: '/users/',
        name: 'auth.users',
        component: ()=> import('@/views/User/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/User/List.vue'),
                name: 'auth.users.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/User/Add.vue'),
                name: 'auth.users.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/User/Edit.vue'),
                name: 'auth.users.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/products/',
        name: 'auth.products',
        component: ()=> import('@/views/Product/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Product/List.vue'),
                name: 'auth.products.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Product/Form.vue'),
                name: 'auth.products.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Product/Form.vue'),
                name: 'auth.products.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/blogs/',
        name: 'auth.blogs',
        component: ()=> import('@/views/Blog/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Blog/List.vue'),
                name: 'auth.blogs.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Blog/Form.vue'),
                name: 'auth.blogs.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Blog/Form.vue'),
                name: 'auth.blogs.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/downloadables/',
        name: 'auth.downloadables',
        component: ()=> import('@/views/Downloadable/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Downloadable/List.vue'),
                name: 'auth.downloadables.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Downloadable/Form.vue'),
                name: 'auth.downloadables.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Downloadable/Form.vue'),
                name: 'auth.downloadables.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/downloadable-pdfs/',
        name: 'auth.downloadablespdfs',
        component: ()=> import('@/views/DownloadablePdf/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/DownloadablePdf/List.vue'),
                name: 'auth.downloadablespdfs.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/DownloadablePdf/Form.vue'),
                name: 'auth.downloadablespdfs.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/DownloadablePdf/Form.vue'),
                name: 'auth.downloadablespdfs.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/contact-lists/',
        name: 'auth.contactlist',
        component: ()=> import('@/views/ContactList/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/ContactList/List.vue'),
                name: 'auth.contactlist.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/ContactList/Form.vue'),
                name: 'auth.contactlist.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/ContactList/Form.vue'),
                name: 'auth.contactlist.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/home-sliders/',
        name: 'auth.homesliders',
        component: ()=> import('@/views/HomeSlider/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/HomeSlider/List.vue'),
                name: 'auth.homesliders.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/HomeSlider/Form.vue'),
                name: 'auth.homesliders.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/HomeSlider/Form.vue'),
                name: 'auth.homesliders.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/newsletters/',
        name: 'auth.newsletters',
        component: ()=> import('@/views/Newsletter/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Newsletter/List.vue'),
                name: 'auth.newsletters.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Newsletter/Form.vue'),
                name: 'auth.newsletters.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Newsletter/Form.vue'),
                name: 'auth.newsletters.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/orders/',
        name: 'auth.orders',
        component: ()=> import('@/views/Order/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Order/List.vue'),
                name: 'auth.orders.listing'
            },
            {
                path: 'view/:id',
                component: ()=> import('@/views/Order/View.vue'),
                name: 'auth.orders.view'
            },
        ],
        beforeEnter: admin,
    },
    {
        path: '/inquiries/',
        name: 'auth.inquiries',
        component: ()=> import('@/views/Inquiry/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Inquiry/List.vue'),
                name: 'auth.inquiries.listing'
            },
            {
                path: 'view/:id',
                component: ()=> import('@/views/Inquiry/View.vue'),
                name: 'auth.inquiries.view'
            },
        ],
        beforeEnter: admin,
    },
    {
        path: '/categories/',
        name: 'auth.categories',
        component: ()=> import('@/views/Category/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Category/List.vue'),
                name: 'auth.categories.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Category/Form.vue'),
                name: 'auth.categories.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Category/Form.vue'),
                name: 'auth.categories.edit'
            },
        ],
        beforeEnter: admin,
    },
    {
        path: '/tabs/',
        name: 'auth.tabs',
        component: ()=> import('@/views/Tab/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Tab/List.vue'),
                name: 'auth.tabs.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Tab/Form.vue'),
                name: 'auth.tabs.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Tab/Form.vue'),
                name: 'auth.tabs.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/dropdowns/',
        name: 'auth.dropdowns',
        component: ()=> import('@/views/Category/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Dropdown/List.vue'),
                name: 'auth.dropdowns.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Dropdown/Form.vue'),
                name: 'auth.dropdowns.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Dropdown/Form.vue'),
                name: 'auth.dropdowns.edit'
            },
        ],
        beforeEnter: admin,
    },
  
];
