export default {
  template: `
      <section class="ing">
          <h2>Selecciona Ingredientes</h2>
          <div v-for="plato in platos" :key="plato.id">
              <div class="ingred" v-for="ingrediente in plato.ingredientes" :key="ingrediente">
                  <input 
                      type="checkbox" 
                      :value="ingrediente" 
                      @change="toggleIngrediente(ingrediente)">
                  {{ ingrediente }}
              </div>
          </div>
          <button @click="cocinar">Cocinar</button>
      </section>
  `,
  props: {
      platos: {
          type: Array,
          required: true
      }
  },
  data() {
      return {
          ingredientesSeleccionados: []
      };
  },
  methods: {
      toggleIngrediente(ingrediente) {
          const index = this.ingredientesSeleccionados.indexOf(ingrediente);
          if (index > -1) {
              this.ingredientesSeleccionados.splice(index, 1);
          } else {
              this.ingredientesSeleccionados.push(ingrediente);
          }
          this.$emit('select-ingrediente', this.ingredientesSeleccionados);
      },
      cocinar() {
          this.$emit('cocinar');
      }
  },
  name: 'IngredientesComponent'
};
