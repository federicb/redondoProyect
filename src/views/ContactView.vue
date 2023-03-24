<template>
  <div class="contact">
    <h1>Contacta con nosotros</h1>
    <div class="data">
      <input class="message" type="text" placeholder="Nombre">
      <input class="message" type="text" placeholder="Email">
      <textarea class="message" name="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
      <button>Enviar</button>
    </div>
    <footer>
      <p>© 2023 Redondo, Inc</p>
      <div class="socialMedia">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
  .contact
    height: 90vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    h1
      padding: 2rem 0
    .data
      padding: 2rem 0
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 100%
      min-height: 70vh
      .message
        margin: .6rem 0
        width: 30%
        text-align: start
        padding: .5rem
        border-radius: 2px
        border: 1px solid black
      button
        border-radius: 2px
        border: 2px solid #42b983
        background: #fafafa
        padding: .6rem 4.5rem
        font-size: 18px
        cursor: pointer
        margin-top: .5rem
    footer
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center
      padding: 2rem
      border-top: 1px solid gray
      p
        padding-left: 1rem 
      .socialMedia
        width: 30%
        display: flex
        justify-content: space-between
        padding: 0 3rem
        i
          font-size: 30px
          cursor: pointer

</style>
