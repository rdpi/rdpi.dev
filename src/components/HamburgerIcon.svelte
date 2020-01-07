<div class="burger flex flex-col">
  <div class="bar w-10 mb-1"/>
  <div class="bar w-10 my-1"/>
  <div class="bar w-6 mt-1"/>
</div>

<style>
  .bar{
    @apply h-1 bg-cyber-yellow
  }
  .burger:hover{
    transform: rotate(90deg);
    transition: .5s;
  }
</style>