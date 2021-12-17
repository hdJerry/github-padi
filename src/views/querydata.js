const query = (search) => {
  return {
    query: `
                query($search: String!){
                    topic(name: $search) {
                        repositories(first: 10, orderBy: {
                        field: CREATED_AT,
                        direction: DESC
                    }) {
                            nodes {
                                name
                                nameWithOwner
                                description
                                url
                                stargazerCount
                                updatedAt
                                forkCount
                                isPrivate
                                owner{
                                login
                                }
                                languages(first: 5, orderBy: {
                                    field: SIZE,
                                    direction: DESC
                                })
                                {
                                    nodes {
                                        name
                                    }
                                }
                              }
                            }
                        stargazerCount
                    }
                   
                }
                `,
    variables: {
      search: search,
    },
  };
};

export default query;
