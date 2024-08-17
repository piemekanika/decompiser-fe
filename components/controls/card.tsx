export const Card = defineComponent({
  setup(_, { slots }) {
    return { slots }
  },
  render() {
    return (
      <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
          {this.slots.default?.()}
        </div>
      </div>
    )
  }
})
