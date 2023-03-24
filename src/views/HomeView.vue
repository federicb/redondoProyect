<template>
  <div class="home">
    <div class="head">
      <h1>Redondo</h1>
      <p class="grano">Tu granito de arena hace un mundo mejor</p>
    </div>
    <div class="main">
      <div class="description">
        <p class="subtitles">Te contamos cómo</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci omnis temporibus ipsum debitis laudantium in tempore libero id. Ex laudantium quis iste numquam nesciunt amet id, reiciendis enim officia minus cum maiores voluptate tenetur corporis iure ad beatae! Minima iure necessitatibus quia ipsam velit possimus perspiciatis. Optio repellat laboriosam sunt.</p>
      </div>
      <div class="examples">
        <p class="subtitles" id="asi">Asi funciona</p>
        <div class="example1">
          <p>Si el costo de tu operación es de 20.23 €</p>
          <div class="total">
            <p>Importe total: 20.23 €</p>
            <i class="fa-solid fa-piggy-bank"></i>
          </div>
          <div class="totalRedondo">
            <p>Importe total con Redondo <i class="fa-solid fa-piggy-bank"></i> :</p>
            <span>24 €</span>
          </div>
          <div class="donation">
            <p>Donar 0.77 € a </p>
            <select>
                <option value="">Causas humanitarias</option>
                <option value="">Salva un bosque</option>
                <option value="">Reciclaje sostenible</option>
                <option value="">Educación</option>
                <option value="">Investigaciones medioambientales</option>
              </select> 
          </div>
          <button>Tramitar pedido</button>
        </div>
        <div class="userExample">
          <p class="subtitles">Prueba como quedarian tus donaciones</p>
          <div class="total">
            <p>Importe total:</p>
            <input type="text" v-model="amount">
            <p> €</p>
            <i class="fa-solid fa-piggy-bank" @click="updateAmount"></i>
          </div>
        
          <div class="totalRedondo">
            <p>Importe total con Redondo <i class="fa-solid fa-piggy-bank"></i> :</p>
            <span>{{ totalAmount }}.00 €</span>
          </div>
          <div class="donation">
            <p>Donar {{ difference }} € a </p>
            <select>
                <option value="">Causas humanitarias</option>
                <option value="">Salva un bosque</option>
                <option value="">Reciclaje sostenible</option>
                <option value="">Educación</option>
                <option value="">Investigaciones medioambientales</option>
              </select> 
          </div>
        
          <button>Tramitar pedido</button>
        </div>
      </div>
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

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex';

export default {
  data() {
    return {
      amount: ''
    }
  },
  methods: {
    ...mapActions('redondo', ['setAmount']),
    ...mapMutations('redondo', ['updateAmount']),
    updateAmount() {
      this.setAmount(this.amount);
    }
  },
  computed: {
    ...mapGetters('redondo', ['totalAmount', 'difference'])
  }
}
</script>

<style lang="sass" scoped>
  .home
    .subtitles
      font-size: 25px
      padding: 2rem 0
  .head
    height: 92vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    line-height: 10rem
    h1
      font-size: 150px
      margin: 4rem 0
    .grano
      font-size: 35px
  .main
    background: #1b2432
    .description
      color: #fafafa
      padding: 0 10rem
    .examples
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      #asi
        color: #fafafa
      .example1
        p
          padding: 1rem 0
      .example1, .userExample
        background: #FAFAFA
        width: 40%
        margin: 1rem 0
        padding: 2rem
        border-radius: 2px
        .total
          display: flex
          align-items: center
          justify-content: center
          p
            font-size: 20px
            padding: 1rem 0
          i
            font-size: 20px
            margin-left: 20px
            border: 1px solid black
            border-radius: 100%
            padding: 10px
            cursor: pointer
        .totalRedondo
          display: flex
          align-items: center
          justify-content: center
          p
            margin-right: 20px
            padding: 1rem 0
            i
              font-size: 18px
        .donation
          display: flex
          align-items: center
          justify-content: center
          margin-bottom: 1rem
          p 
            margin-right: 20px
            padding: 1rem 0
          select
            border: none
            background: #fff 
        button
          background: #f4d046
          border: none
          padding: 0.6rem 4.5rem
          border-radius: 10px
          cursor: pointer
      .userExample
        margin-bottom: 2rem
        .total
          input
            margin: 0 15px
            width: 5rem
  footer
    display: flex
    justify-content: space-between
    align-items: center
    padding: 2rem
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
