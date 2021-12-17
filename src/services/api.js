export function searchGithub(search, token, query) {
  let auth = {
    Authorization: `token ${token}`,
  };

  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
        ...auth,
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
