import type { Preview } from '@storybook/react';
import {withThemeFromJSXProvider} from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global'
import lightTheme from '../src/styles/themes/light'
import darkTheme from '../src/styles/themes/dark'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export const decorators = [
  withThemeFromJSXProvider({
    themes:{
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle
  })
]
export default preview;
