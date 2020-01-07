<script>
  import router from "page"
  import Home from './containers/Home.svelte'
  import Skills from './containers/Skills.svelte'
  
  let page
  let params
  
  router('/', () => page = Home)
  router('/skills', () => page = Skills)
  router.start()
</script>

<svelte:component this={route} params={params} />