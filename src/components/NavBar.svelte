<script>
  import NavLink from './NavLink.svelte';
  import ContactForm from './ContactForm.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import HamburgerIcon from './HamburgerIcon.svelte';
  export let open = false;
  let mobileOpen = false;

  let handleClick = () => {
    open = !open;
  }
  let handleClickMobile = () => {
    mobileOpen = !mobileOpen;
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-25vh";
  }
  prevScrollpos = currentScrollPos;
}
</script>

<div class="fixed p-5 hidden md:flex flex-row justify-between text-white bg-cyber-lilac w-full md:items-center">
  <a class="font-bold" href="#home">{`<rdpi.dev>`}<span class="px-1 cursor">▊</span></a>
  <div class="flex flex-col md:flex-row md:items-center">
    <NavLink href="#about" number="01" title="About" />
    <NavLink href="#skills" number="02" title="Skills" />
    <NavLink href="#experience" number="03" title="Experience" />
    <NavLink href="#projects" number="04" title="Projects" />
    <button on:click={handleClick} class="text-cyber-yellow border-cyber-yellow border-solid border-2 rounded p-2 transition-colors hover:bg-cyber-pink">Get In Touch</button>
    <ContactForm bind:open/>
  </div>
</div>

<div id='navbar' class="fixed flex md:hidden flex-row justify-between text-white bg-cyber-lilac w-full px-2 py-4 items-center">
  <span class="px-2 text-cyber-yellow hover:text-cyber-pink transition-colors font-bold logo"><a href="#home">{`<rdpi.dev>`}<span class="px-1 cursor">▊</span></a></span>
  <div class="flex flex-col md:flex-row md:items-center">
    <button on:click={handleClickMobile} class="pr-1"><HamburgerIcon/></button>
    <MobileMenu bind:open={mobileOpen}>
      <div class="flex flex-col mx-auto">
      <NavLink on:click={handleClickMobile} href="#about" number="01" title="About" />
      <NavLink on:click={handleClickMobile} href="#skills" number="02" title="Skills" />
      <NavLink on:click={handleClickMobile} href="#experience" number="03" title="Experience" />
      <NavLink on:click={handleClickMobile} href="#projects" number="04" title="Projects" />
      <button on:click={handleClick} class="text-cyber-yellow border-cyber-yellow border-solid border-2 rounded p-2 mt-4 md:mt-0 transition-colors hover:bg-cyber-pink">Get In Touch</button>
      <ContactForm bind:open/>
  </div>
    </MobileMenu>
  </div>
</div>

<style>
  .cursor {
    animation: blinker 1s step-end infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  #navbar{
    transition: .5s;
  }
</style>