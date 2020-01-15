<script>

  import { fade } from 'svelte/transition';
  import NavBar from './components/NavBar.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './containers/Home.svelte';
  import About from './containers/About.svelte';
  import Skills from './containers/Skills.svelte';
  import Experience from './containers/Experience.svelte';
  import Projects from './containers/Projects.svelte';
  import Links from './components/Links.svelte';

  let showLinks = false;
  let w;
  $: console.log(w);
</script>

<main bind:clientWidth={w} class="min-h-screen bg-gray-400">
  <NavBar bind:open={showLinks} />
  <Home />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Footer />
  {#if w >= 768}
  <Links />
  {:else if !showLinks}
  <div transition:fade>
    <Links/>
  </div>
  {/if}
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  html{
    scroll-behavior: smooth;
    font-family: "F Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  }
  body{
    margin: 0px;
  }
  a{
    @apply text-cyber-yellow transition-color
  }
  a:hover{
    @apply text-cyber-pink 
  }
</style>