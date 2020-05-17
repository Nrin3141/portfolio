import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { loadReCaptcha } from "react-recaptcha-v3"
import ContactForm from "../components/contactform"

const OutlinedTextFields = () => {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    loadReCaptcha(process.env.GATSBY_RECAPTCHA_API_PUBLIC_KEY)
    setMount(true)
  })
  return (
    <Layout>
      <SEO
        title="Home"
        addition="Contact"
        keywords={[`gatsby`, `application`, `react`]}
      />
      {mount ? <ContactForm /> : null}
    </Layout>
  )
}

export default OutlinedTextFields
