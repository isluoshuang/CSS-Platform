// import home from '../../common/home.vue'
// const home = r => require.ensure( [], () => r (require(’../../common/home.vue’)))


import Vue from 'vue'
import Router from 'vue-router'
// import qsList from '@/components/QS-list'
// import qsData from '@/components/QS-data'
// import qsFill from '@/components/QS-fill'
// import qsEdit from '@/components/QS-edit'
// import qsNlp from '@/components/QS-nlp'
// import qsKeywordExtraction from '@/components/QS-keywordExtraction'
// import qsDataService from '@/components/QS-dataService'
// import qsSearchArticle from '@/components/QS-searchArticle'
// import qsComputingService from '@/components/QS-computingService'
// import qsGetWordFrequency from '@/components/QS-getWordFrequency'
// import qsFreAnlysisPuc from '@/components/QS-freAnlysisPuc'
// import qsGetSentiment from '@/components/QS-getSentiment'
// import qsLogin from '@/components/QS-login'

// import qsMain from '@/components/Q'

const qsList = resolve => require(['../components/QS-list'], resolve)
const qsData = resolve => require(['../components/QS-data'], resolve)
const qsFill = resolve => require(['../components/QS-fill'], resolve)
const qsEdit = resolve => require(['../components/QS-edit'], resolve)
const qsNlp = resolve => require(['../components/QS-nlp'], resolve)
const qsKeywordExtraction = resolve => require(['../components/QS-keywordExtraction'], resolve)
const qsDataService = resolve => require(['../components/QS-dataService'], resolve)
const qsSearchArticle = resolve => require(['../components/QS-searchArticle'], resolve)

const qsComputingService = resolve => require(['../components/QS-computingService'], resolve)
const qsGetWordFrequency = resolve => require(['../components/QS-getWordFrequency'], resolve)
const qsFreAnlysisPuc = resolve => require(['../components/QS-freAnlysisPuc'], resolve)
const qsGetSentiment = resolve => require(['../components/QS-getSentiment'], resolve)
const qsLogin = resolve => require(['../components/QS-login'], resolve)
const qsDatabaseShow = resolve => require(['../components/QS-databaseShow'], resolve)
const qsMicCompute = resolve => require(['../components/QS-micCompute'], resolve)
const qscalculate = resolve => require(['../components//QS-calculateMain'], resolve)
//暂时用不到
// const scientificPage = resolve => require(['../views/scientific'], resolve)
// const pubResourcesPage = resolve => require(['../views/pubResources'], resolve)
// const virLaboratoryPage = resolve => require(['../views/virLaboratory'], resolve)
// const teamPage = resolve => require(['../views/team'], resolve)
// const resultPage = resolve => require(['../views/result'], resolve)
// const newsTrendsPage = resolve => require(['../views/newsTrends'], resolve)
// const contactPage = resolve => require(['../views/contact'], resolve)
const longHomePage = resolve => require(['../views/longHome'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'qsList',
      component: qsList
    },
    {
      path: '/',
      name: 'longHome',
      component: longHomePage
    },
    {
      path: '/data/:num',
      name: 'qsData',
      component: qsData
    },
    {
      path: '/calculate',
      name: 'qscalculate',
      component: qscalculate
    },
    {
      path: '/fill/:user/:num',
      name: 'qsFill',
      component: qsFill
    },
    {
      path: '/edit/:num',
      name: 'qsEdit',
      component: qsEdit
    },
    {
      path: '/nlp',
      name: 'qsNlp',
      component: qsNlp
    },
    {
      path: '/keywordExtraction',
      name: 'qsKeywordExtraction',
      component: qsKeywordExtraction
    },
    {
      path: '/dataService',
      name: 'qsDataService',
      component: qsDataService
    },
    {
      path: '/searchArticle',
      name: 'qsSearchArticle',
      component: qsSearchArticle
    },
    {
      path: '/computingService',
      name: 'qsComputingService',
      component: qsComputingService
    },
    {
      path: '/getWordFrequency',
      name: 'qsGetWordFrequency',
      component: qsGetWordFrequency
    },
    {
      path: '/freAnlysisPuc',
      name: 'qsFreAnlysisPuc',
      component: qsFreAnlysisPuc
    },
    {
      path: '/getSentiment',
      name: 'qsGetSentiment',
      component: qsGetSentiment
    },
    // {
    //   path: '/',
    //   name: 'qsMain',
    //   component: qsMain
    // },
    {
      path: '/login',
      name: 'qsLogin',
      component: qsLogin
    },
    {
      path: '/databaseShow',
      name: 'qsDatabaseShow',
      component: qsDatabaseShow
    },
    {
      path: '/micCompute',
      name: 'qsMicCompute',
      component: qsMicCompute
    },
    // {
    //   path: '/scientific',
    //   name: 'scientific',
    //   component: scientificPage
    // },
    // {
    //   path: '/pubResources',
    //   name: 'pubResources',
    //   component: pubResourcesPage
    // },
    // {
    //   path: '/virLaboratory',
    //   name: 'virLaboratory',
    //   component: virLaboratoryPage
    // },
    // {
    //   path: '/team',
    //   name: 'team',
    //   component: teamPage
    // },
    // {
    //   path: '/result',
    //   name: 'result',
    //   component: resultPage
    // },
    // {
    //   path: '/newsTrends',
    //   name: 'newsTrends',
    //   component: newsTrendsPage
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: contactPage
    // }
  ]
})
