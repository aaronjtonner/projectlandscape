import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import SEO from "../components/seo"

export default function index() {
  return (
    <Layout>
      <SEO title="home" description="" />
      <Hero />
    </Layout>
  )
}
