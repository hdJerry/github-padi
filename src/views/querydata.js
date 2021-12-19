const queryData = (search, type, first) => {
  return {
    query: `
        query($search: String!, $type: SearchType!, $first: Int){
            search(first: $first, type: $type, query: $search) {
              codeCount
              repositoryCount
              issueCount
              userCount
              edges {
                node {
                  ...on User {
                    url
                    avatarUrl
                    bio
                    fullname:name
                    company
                    followers {
                      totalCount
                    }
                    repositories(first: 10) {
                      edges {
                        node {
                          forkCount,
                          stargazerCount,
                          languages(first: 5) {
                            nodes {
                              name,
                              color
                            }
                          }
                        }
                      }
                    }
                  },
                  ...on Repository {
                    reponame:name
                    description
                    languages(first: 5) {
                      edges {
                        node {
                          name
                          color
                        }
                      }
                    }
                  }
                }
              }
            }
            
        }
        `,
    variables: {
      search: search,
      type: type,
      first: first,
    },
  };
};

export default queryData;

// `
//  topic(name: $search) {
//    repositories(first: 10, orderBy: {
//      field: CREATED_AT,
//      direction: DESC
//    }) {
//      nodes {
//        name
//        nameWithOwner
//        description
//        url
//        stargazerCount
//        updatedAt
//        forkCount
//        isPrivate
//        owner {
//          login
//        }
//        languages(first: 5, orderBy: {
//          field: SIZE,
//          direction: DESC
//        }) {
//          nodes {
//            name
//          }
//        }
//      }
//    }
//    stargazerCount
//  }
//  `
