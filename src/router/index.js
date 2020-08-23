// import home from '../../common/home.vue'
// const home = r => require.ensure( [], () => r (require(’../../common/home.vue’)))


import Vue from 'vue'
import Router from 'vue-router'
// import qsList from '@/components/QS-list'
// import qsData from '@/components/QS-data'
// import qsFill from '@/components/QS-fill'
// import qsEdit from '@/components/QS-edit'
import qsMain from '@/components/QS-main'
// import qsNlp from '@/components/QS-nlp'
// import qsKeywordExtraction from '@/components/QS-keywordExtraction'
// import qsDataService from '@/components/QS-dataService'
// import qsSearchArticle from '@/components/QS-searchArticle'
// import qsComputingService from '@/components/QS-computingService'
// import qsGetWordFrequency from '@/components/QS-getWordFrequency'
// import qsFreAnlysisPuc from '@/components/QS-freAnlysisPuc'
// import qsGetSentiment from '@/components/QS-getSentiment'
// import qsLogin from '@/components/QS-login'

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



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'qsList',
      component: qsList
    },
    {
      path: '/data/:num',
      name: 'qsData',
      component: qsData
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
    {
      path: '/',
      name: 'qsMain',
      component: qsMain
    },
    {
      path: '/login',
      name: 'qsLogin',
      component: qsLogin
    },
    {
      path: '/databaseShow',
      name: 'qsDatabaseShow',
      component: qsDatabaseShow
    }
  ]
})
