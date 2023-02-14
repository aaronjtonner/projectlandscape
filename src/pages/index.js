import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import SEO from "../components/seo"
import PortfolioBanner from "../components/portfolioBanner"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"

export default function index() {
  return (
    <Layout>
      <SEO title="home" description="" />
      <Hero />
      <PortfolioBanner />
      <MainServicesLinks />
      <AllServicesBanner />
    </Layout>
  )
}
