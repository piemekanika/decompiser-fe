export const Button = defineComponent({
  props: {
    onClick: Function,
    role: String,
  },
  setup(_, { slots }) {
    return { slots}
  },
  render() {
    return (
      <button
        class="btn btn-primary"
        role={this.role}
        onClick={() => this.onClick?.()}
      >
        {this.slots.default?.()}
      </button>
    )
  }
})
