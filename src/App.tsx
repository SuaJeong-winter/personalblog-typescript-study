import './App.css'
import { Avatar, Wrap, WrapItem, Circle, Float } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar.Root>
            <Avatar.Fallback name="Dari Ann" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            <Float placement="bottom-end" offsetX="1" offsetY="1">
              <Circle
                bg="green.500"
                size="8px"
                outline="0.2em solid"
                outlineColor="bg"
              />
            </Float>
          </Avatar.Root>
        </WrapItem>
        <WrapItem>
          <Avatar.Root colorPalette="green" variant="subtle">
            <Avatar.Fallback name="Dari Ann" />
          </Avatar.Root>
        </WrapItem>
      </Wrap>

      <h1 className='text-5xl'>Hello TypeScript</h1>
    </>
  )
}

export default App
