import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../../buttons"
import { Container, GridThree, Section } from "../../layoutComponents"

const StyledImg = styled(GatsbyImage)`
  max-height: 150px;
  max-width: 150px;
`

export default function Benefits1({ subheader, title, benefitContent }) {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <p className="subheader accent">{subheader}</p>
          <h2 className="title">{title}</h2>
        </div>
        <GridThree>
          {benefitContent.map(benefit => {
            return (
              <div className="spacing">
                <StyledImg
                  image={
                    benefit.image.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={benefit.image.altText}
                />
                <h3 className="body--large caps">{benefit.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${benefit.description}`,
                  }}
                />
              </div>
            )
          })}
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">get quote</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
