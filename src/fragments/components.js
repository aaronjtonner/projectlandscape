
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
     
 
      fragment Page_Benefits1 on WpPage_Pagecomponents_PageComponents_Benefits1 {
        
  subheader
  title
  benefitContent {
    title
    description
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  
      }
     
 
      fragment Page_ComponentA on WpPage_Pagecomponents_PageComponents_ComponentA {
        
  body
  subheader
  title
  componentItems {
    title
    text
    button
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
    
      }
     
 
      fragment Page_ComponentB on WpPage_Pagecomponents_PageComponents_ComponentB {
        
    body
    subheader
    title
    componentItems {
      title
      text
      button
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
      
      }
     
 
      fragment Page_ComponentC on WpPage_Pagecomponents_PageComponents_ComponentC {
        
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
     
 
      fragment Page_ComponentD on WpPage_Pagecomponents_PageComponents_ComponentD {
        
    subheader
    title
    content {
        text
    }
  
      }
     
 
      fragment Page_ComponentE on WpPage_Pagecomponents_PageComponents_ComponentE {
        
  subheader
  title
  content {
    title
    description
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
    
      }
     
 
      fragment Page_ImageGallery on WpPage_Pagecomponents_PageComponents_ImageGallery {
        
            body
            title
            subheader
            imageGallery {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
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
     
 
      fragment Page_ProcessA on WpPage_Pagecomponents_PageComponents_ProcessA {
        
  title
  processContent {
    number
    processDescription
  }
  
      }
     
 
      fragment Page_Text on WpPage_Pagecomponents_PageComponents_Text {
        
      text
      }
    
    `
    