const queryData = (search, type, first, cursor, last) => {
  return {
    query: `
        query($search: String!, $type: SearchType!, $first: Int, $last: Int, $cursor: String) {
            search(first: $first, type: $type, query: $search, after: $cursor, last: $last) {
              codeCount
              repositoryCount
              issueCount
              userCount
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
              edges {
                cursor
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
      cursor: cursor,
      last: last,
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
