export const Input = defineComponent({
  props: {
    placeholder: String,
    onChange: { type: Function, required: true },
  },
  render() {
    return (
      <input
        placeholder={this.placeholder} 
        class="input input-bordered w-full max-w-xs"
        // @ts-expect-error (тут нет ошибки, это ts тупит)
        onChange={(event) => this.onChange(event.target.value)}
      />
    )
  }
})
