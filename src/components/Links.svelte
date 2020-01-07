<script>
  import Icon from 'fa-svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
</script>

<div class="pl-1 md:pl-2 lg:pl-6 text-cyber-yellow bg-cyber-yellow">
  <ul>
    <div class="line"></div>
    <li><a href="https://github.com/rdpi" target="_blank"><Icon class="text-2xl mt-8 mb-4" icon={faGithub}/></a></li>
    <li><a href="https://linkedin.com/in/ryan-d-pitts" target="_blank"><Icon class="text-2xl mt-4 mb-8" icon={faLinkedin}/></a></li>
    <div class="line"></div>
  </ul>
</div>
<style>
ul{
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
}
.line{
    display: block;
    width: 1px;
    height: 25vh;
    margin: 0px auto;
    @apply bg-cyber-yellow
}
</style>