<script>
export default {
  name: 'FooterComponent',
};
</script>

<template>
  <footer>
    <div class="info">
      <div class="info-icon-name">
        <img class="info-logo" src="/logo_black.png" alt="GameList logo">
        <i>GameList</i>
      </div>

      <i>is developped by</i>
      <span>Maxime Belpois (<i>the GYM enjoyer</i>)</span>
      <span>Villon Chen (<i>the CTF enjoyer</i>)</span>
      <span>William Chieu (<i>the AMQ enjoyer</i>)</span>

      <i>and powered by <a href="https://chat.mistral.ai/chat" target="_blank" rel="noopener noreferrer">OpenAI</a></i>
    </div>
    
    <div class="buttons">
      <a class="button" href="https://bitcoin.org/en/buy" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-outlined">currency_bitcoin</span>
        <span>Support Us</span>
      </a>
      
      <a class="button" href="https://www.amazon.com/Breville-BES880BSS-Barista-Espresso-Stainless/dp/B078WMLXXG" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-outlined">coffee_maker</span>
        <span>Buy Us a Coffee Machine</span>
      </a>

      <a class="button" href="https://whatismyipaddress.com/" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-outlined">language</span>
        <span>Leak your address</span>
      </a>
    </div>

    <div class="copyright">
      <div class="copyright-top">
        <span class="material-symbols-outlined">copyright</span>
        <span>Copyright</span>
        <span class="material-symbols-outlined">attribution</span>
      </div>
      
      <pre>
2024 GameList all rights are not reserved, as we copied most of our concepts from other websites.
      </pre>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(69, 69, 69);
  padding-top: 30px;
  padding-bottom: 30px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
}

.info-icon-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.info-logo {
  width: 50px;
  height: 50px;
}

.info a {
  color: white;
  text-decoration: underline;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  border: solid black 1px;
  border-radius: 15px;
  padding: 10px;
  gap: 8px;
}

.button:hover {
  background-color: black;
}

.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.copyright-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

pre {
  width: 20vh;
  text-align: center;
  white-space: pre-wrap;
}

@media only screen and (max-width: 800px) {
  footer {
    flex-direction: column;
    gap: 50px;
  }

  .buttons {
    gap: 10px;
  }
}
</style>