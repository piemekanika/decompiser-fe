import { defineComponent } from 'vue'
import { Button, Card, Input } from '~/components/controls'

export const MainPage = defineComponent({
  setup() {
    const initiativeName = ref<string>('')

    const handleInput = (value: string) => {
      initiativeName.value = value
    }

    const handleClick = (): void => {
      // todo
    }

    return {
      handleInput,
      handleClick,
    }
  },
  render() {
    return (
      <Card>
        <form
          onSubmit={e => e.preventDefault()}
          class="flex flex-col gap-4"
        >
          <Input
            onChange={this.handleInput}
            placeholder='Название инициативы'
          />

          <Button
            role="submit"
            onClick={this.handleClick}
          >
            добавить
          </Button>
        </form>
      </Card>
    )
  }
})
