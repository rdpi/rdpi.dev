<script>
  import { createEventDispatcher } from 'svelte';
  export let href = '';
  export let number = '';
  export let title = '';
  const dispatch = createEventDispatcher();

	const click = () => dispatch('click');
</script>

<a class="link pr-4 py-4 md:py-0 text-white hover:text-cyber-yellow" on:click={click} href={href}><span class="text-cyber-yellow">{number}.</span>{title}</a>