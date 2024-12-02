"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"



const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'iransans-rtl' },
        body: { value: 'iransans-rtl' },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    // <ChakraProvider value={defaultSystem}>
     <ChakraProvider value={system}> 
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

