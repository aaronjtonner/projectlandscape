import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allWpMenu {
        nodes {
          name
        }
      }
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            label
            url
            id
            parentId
            childItems {
              nodes {
                label
                url
                parentId
              }
            }
          }
        }
      }
    }
  `)
  return data
}
