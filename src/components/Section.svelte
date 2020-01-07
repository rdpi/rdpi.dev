<script>
  export let id = '';
  export let number = '';
  export let title = '';
</script>

<div id={id} class="min-h-screen bg-cyber-lilac text-white flex items-center justify-center">
  <div class="container mx-auto px-10 md:px-28 lg:px-56 xl:px-28">
    <div class="flex flex-row items-center pb-4">
      {#if title}
        <h1 class="text-2xl pr-4"><span class="text-cyber-yellow">{number}.</span>{title}</h1>
        <div class="bg-cyber-yellow h-px w-8/12"/>
      {/if}
    </div>
    <slot/>
  </div>
</div>