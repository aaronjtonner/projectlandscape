import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container, GridThree } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`
const Item = styled.div`
  font-family: var(--ff-gentium);
`

export default function ComponentD({ subheader, title, content }) {
  return (
    <Section>
      <Container className="spacing-md">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <GridThree>
          {content.map(item => {
            return (
              <Item
                dangerouslySetInnerHTML={{
                  __html: `${item.text}`,
                }}
              />
            )
          })}
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
