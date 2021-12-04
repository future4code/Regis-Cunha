import {createMuiTheme} from "@material-ui/core/styles"
import {primaryColor, secundaryColor} from "./colors"

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "blue"
        },

        text: {
            primary: secundaryColor
        }
    }
})

export default theme