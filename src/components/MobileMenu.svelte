<script>
  import Icon from 'fa-svelte';
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
  export let open = false;
  let subject = '';
  let email = '';
  let message = '';
  let captcha = '';
  let error = '';
  let file = {};
  let right = 0;

  $: right = (open) ? 0 : '-100vw';
  const close = () => {
    open = false;
  }
</script>

<div class="p-5 fixed top-0 flex flex-col bg-cyber-purple h-screen w-2/3 md:w-1/2 lg:w-1/3 shadow-lg" style="right: {right}; transition: .5s;">
  <div>
    <button class="object-left-top text-cyber-yellow hover:text-cyber-pink text-2xl" on:click={close}><div class="inline-block rightArrow"><Icon icon={faChevronRight}/></div><div class="leftArrow inline-block"><Icon icon={faChevronLeft}/></div></button>
  </div>
  <slot/> 
</div>


<style>
  .leftArrow{
    transition: .25s;
    position: relative;
    left: -1rem;
  }
  .leftArrow:hover{
    transform: rotate(180deg) translate(-.3rem, -.4rem);
  }
  .rightArrow{
    transition: .25s;
  }
</style>
