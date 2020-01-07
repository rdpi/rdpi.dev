<script>
  import Section from '../components/Section.svelte';

  let languages = ['JavaScript', 'PHP', 'Java', 'C', 'HTML', 'CSS', 'Less', 'Sass', 'Python', 'Shell Scripting', 'SQL'];
  let frameworks = ['React', 'React Native', 'Angular', 'Svelte', 'Laravel', 'Express', 'Node.js', 'Wordpress', 'Drupal',];
  let technologies =['MariaDB', 'MySQL', 'MongoDB', 'Linux', 'BSD', 'Windows', 'Apache', 'NGINX', 'Git', 'Travis CI', 'Jenkins'];

  let filter = '';

  $: wordFilter = (word) => {
    let ret = false;
    if(filter == '') {
      return true;
    }
    filter.split(",").forEach((val) => {
      if (word.toLowerCase().trim().includes(val.toLowerCase().trim())) {
        ret = true;
      }
    });
    return ret;
  }
</script>

<Section id="skills" number="02" title="Skills">
  <p>Here's a list of things I work with. Start typing below a list below to filter for specific keywords</p>
  <input bind:value={filter} class="bg-cyber-lilac text-cyber-yellow w-10/12 p-2 my-8 border-solid border-2 border-cyber-yellow rounded placeholder-white" placeholder="JavaScript, HTML, CSS..."/> 
  <div class="flex">
    <div class="w-1/3">
      <h1 class="font-bold text-cyber-yellow pb-2">Languages</h1>
      <ul class="list-disc list-inside">
        {#each languages.filter((word) => wordFilter(word)) as skill (skill)}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div class="w-1/3">
      <h1 class="font-bold text-cyber-yellow pb-2">Frameworks</h1>
      <ul class="list-disc list-inside">
        {#each frameworks.filter((word) => wordFilter(word)) as skill (skill)}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div class="w-1/3">
      <h1 class="font-bold text-cyber-yellow pb-2">Technologies</h1>
      <ul class="list-disc list-inside">
        {#each technologies.filter((word) => wordFilter(word)) as skill (skill)}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </div>
</Section>

