<script>
  import axios from 'axios';
  import Icon from 'fa-svelte';
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
  export let open = false;
  export let captchaId;
  export let widgetId;
  let subject = '';
  let email = '';
  let message = '';
  let captcha = '';
  let error = '';
  let sendText = 'Send';
  let file = {};
  let right = 0;

  $: right = (open) ? 0 : '-100vw';
  const close = () => {
    open = false;
    subject = '';
    email = '';
    message = '';
    captcha = '';
    error = '';
    sendText = 'Send';
    grecaptcha.reset(widgetId); 
  }

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = () => {
    error = '';
    captcha = grecaptcha.getResponse(widgetId);
    if(message.length < 1){
      error = 'A message is required';
      return false;
    }
    if (!captcha){
      error = 'Please complete captcha'
      return false;
    }
    sendText = 'Sending...';

    const msg = {
      subject,
      email,
      message,
      captcha
    }
    const config = {
      headers: {
            'Content-Type': 'application/json',
        }
    }
    console.log(msg)
    axios.post(`${RDPI_API}/message`, msg, config).then( async (res) => {
      sendText = 'Sent!';
      await sleep(1000);
      open = false;
      subject = '';
      message = '';
      grecaptcha.reset(); 
    }).catch((err) => {
      error = 'Error sending message';
      sendText = 'Send';
      console.log('Error Posting');
      console.log(err);
      console.log(err.data);
      grecaptcha.reset(widgetId); 
    })
  }
  
</script>

<div class="p-5 fixed top-0 flex flex-col bg-cyber-purple h-screen w-full md:w-1/2 lg:w-1/3 shadow-lg" style="right: {right}; transition: .75s;">
  <div>
    <button class="object-left-top text-cyber-yellow hover:text-cyber-pink text-2xl" on:click={close}><div class="inline-block rightArrow"><Icon icon={faChevronRight}/></div><div class="leftArrow inline-block"><Icon icon={faChevronLeft}/></div></button>
  </div>
  <p class="pt-5">Shoot me a message here, or if you prefer, send me an email at <a href="mailto:ryanpitts@protonmail.com">ryanpitts@protonmail.com</a></p>
  <input bind:value={subject} class="w-full bg-cyber-purple text-cyber-yellow p-2 mt-8 border-solid border-2 border-cyber-yellow rounded placeholder-white" placeholder="Subject (Optional)"/>
  <input bind:value={email} class="w-full bg-cyber-purple text-cyber-yellow p-2 mt-4 border-solid border-2 border-cyber-yellow rounded placeholder-white" placeholder="Your Email Address (Optional)"/>
  <textarea bind:value={message} class="w-full bg-cyber-purple text-cyber-yellow h-64 p-2 mt-4 mb-8 border-solid border-2 border-cyber-yellow rounded placeholder-white" placeholder="Message"/>
  <div class="mb-8 flex justify-center w-full">
    <div id={captchaId}></div>
  </div>
  <button on:click={handleSubmit} class="w-full text-cyber-yellow border-cyber-yellow border-solid border-2 rounded p-2 transition-colors hover:bg-cyber-pink">{sendText}</button>
  {#if error}
    <p class="text-cyber-pink">{error}</p>
  {/if}
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