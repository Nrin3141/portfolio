import { SheetsRegistry } from "jss"
import {
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"

export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#f9dc5c",
    },
    primary: {
      main: "#4CAF50",
    },
    tertiary: {
      color: "#E44D69",
    },
    error: red,
  },
  typography: {
    useNextVariants: true,
  },
})

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
