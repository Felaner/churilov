import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'
import AppMain from '@/views/AppMain'
import AppLogin from '@/views/AppLogin'
import AppAdmin from '@/views/AppAdmin'
import EditNavbar from '@/components/admin/blocks/EditNavbar'
import EditModal from '@/components/admin/blocks/EditModal'
import EditMain from '@/components/admin/blocks/EditMain'
import EditCalculate from '@/components/admin/blocks/EditCalculate'
import EditWhyWe from '@/components/admin/blocks/EditWhyWe'
import EditFacts from '@/components/admin/blocks/EditFacts'
import EditWant from '@/components/admin/blocks/EditWant'
import EditSteps from '@/components/admin/blocks/EditSteps'
import EditPortfolio from '@/components/admin/blocks/EditPortfolio'
import EditExcursion from '@/components/admin/blocks/EditExcursion'
import EditReviews from '@/components/admin/blocks/EditReviews'
import EditAddServices from '@/components/admin/blocks/EditAddServices'
import EditContacts from '@/components/admin/blocks/EditContacts'
import EditFaq from '@/components/admin/blocks/EditFaq'
import EditForm from '@/components/admin/blocks/EditForm'
import EditFooter from '@/components/admin/blocks/EditFooter'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppMain },
    { path: '/login', component: AppLogin },
    {
      path: '/admin',
      component: AppAdmin,
      meta: { auth: true },
      children: [
        {
          path: 'edit-navbar',
          name: 'editNavbar',
          component: EditNavbar,
          props: true
        },
        {
          path: 'edit-modal',
          name: 'editModal',
          component: EditModal,
          props: true
        },
        {
          path: 'edit-main',
          name: 'editMain',
          component: EditMain,
          props: true
        },
        {
          path: 'edit-calculate',
          name: 'editCalculate',
          component: EditCalculate,
          props: true
        },
        {
          path: 'edit-why-we',
          name: 'editWhyWe',
          component: EditWhyWe,
          props: true
        },
        {
          path: 'edit-facts',
          name: 'editFacts',
          component: EditFacts,
          props: true
        },
        {
          path: 'edit-want',
          name: 'editWant',
          component: EditWant,
          props: true
        },
        {
          path: 'edit-steps',
          name: 'editSteps',
          component: EditSteps,
          props: true
        },
        {
          path: 'edit-portfolio',
          name: 'editPortfolio',
          component: EditPortfolio,
          props: true
        },
        {
          path: 'edit-excursion',
          name: 'editExcursion',
          component: EditExcursion,
          props: true
        },
        {
          path: 'edit-reviews',
          name: 'editReviews',
          component: EditReviews,
          props: true
        },
        {
          path: 'edit-add-services',
          name: 'editAddServices',
          component: EditAddServices,
          props: true
        },
        {
          path: 'edit-contacts',
          name: 'editContacts',
          component: EditContacts,
          props: true
        },
        {
          path: 'edit-faq',
          name: 'editFaq',
          component: EditFaq,
          props: true
        },
        {
          path: 'edit-form-block',
          name: 'editFormBlock',
          component: EditForm,
          props: true
        },
        {
          path: 'edit-footer',
          name: 'editFooter',
          component: EditFooter,
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
