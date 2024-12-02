"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"



// const system = createSystem(defaultConfig, {
//   theme: {
//     tokens: {
//       fonts: {
//         heading: { value: 'samim' },
//         body: { value: 'samin' },
//       },
//     },
//   },
// })

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
    {/* <ChakraProvider value={system}> */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

