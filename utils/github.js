import fetch from 'isomorphic-unfetch'

export const getGithubData = async (ownerName, repoName) => {
    let resp = await fetch(`http://api.github.com/repos/${ownerName}/${repoName}`)
    let data = await resp.json()
    
    return {
        data: data
    }
}