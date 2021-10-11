import { GH_TOKEN } from "./gh-token";

export const GetUserdata = async (username) => {
    const headers = {
        'Authorization': `bearer ${GH_TOKEN}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
                login
                location
                url
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                bio
                avatarUrl
                websiteUrl
                gists {
                    totalCount
                }
                repositories(privacy: PUBLIC, ownerAffiliations: OWNER) {
                    totalCount
                }
                name
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                    }
                }
            }
        }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}

export const GetUserRepositories = async (username) => {
    const headers = {
        'Authorization': `bearer ${GH_TOKEN}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
                repositories(privacy: PUBLIC, ownerAffiliations: OWNER, orderBy: {field: PUSHED_AT, direction: DESC}, first: 6) {
                    edges {
                        node {
                            name
                            url
                            pushedAt
                            stargazerCount
                            description
                            primaryLanguage {
                                name
                            }
                            repositoryTopics(last: 10) {
                                nodes {
                                    topic {
                                        name
                                    }
                                }
                            }
                        forkCount
                        }
                    }
                }
            }
        }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}

export const UserLocationDevs = async (location) => {
    const headers = {
        'Authorization': `bearer ${GH_TOKEN}`,
    }
    const body = {
        "query": `query {
            search(query: 
                """
                location:"${location}"
                """, type: USER) {
                userCount
            }
        }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}