
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Page_Banner on WpPage_Pagecomponents_PageComponents_Banner {
        
        title
        description
        subheader
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      
      }
     
 
      fragment Page_ImageLeft on WpPage_Pagecomponents_PageComponents_ImageLeft {
        
          subheader
          title
          body
          image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
      
      }
     
 
      fragment Page_ImageRight on WpPage_Pagecomponents_PageComponents_ImageRight {
        
        subheader
        title
        body
        image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    
      }
     
 
      fragment Page_Text on WpPage_Pagecomponents_PageComponents_Text {
        
      text
      }
    
    `
    