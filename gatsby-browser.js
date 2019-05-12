import ReactDOM from "react-dom"

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback)
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
