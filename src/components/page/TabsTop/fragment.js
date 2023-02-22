module.exports = () => {
  return `
    title
    tabsContent {
        tabLabel
        tabTitle
        tabBody
        tabList
        tabImage {
            altText 
            localFile {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
  `
}
