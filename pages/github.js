import Layout from '../components/MyLayout'
import {getGithubData} from '../utils/github.js'

const repos = [
    {
        author: "fmorisan",
        repo: "amaurascripts"
    },
    {
        author: "zeit",
        repo: "next.js"
    },
    {
        author: "Microsoft",
        repo: "TypeScript"
    }
]

const GithubRepoView = (props) => (
    <div className="repo">
        <img src={props.repo.owner.avatar_url} style={{ width: 100, float:'left' }}/>
        <div style={{paddingLeft: 15}}>
            <h1>{props.repo.full_name}</h1>
            <span>This repo has {props.repo.stargazers_count} ⭐</span>
        </div>
    </div>
)

const GithubInfoView = (props) => (
    <Layout>
        <div>
        {props.repos.map(repo => <GithubRepoView repo={repo} key={repo.id} />)}
        </div>
    </Layout>
)

GithubInfoView.getInitialProps = async ({pathname, query}) => {
    let allData = await Promise.all(repos.map(({author, repo}) => getGithubData(author, repo)))
    allData = allData.map(o => o.data)
    console.log(allData)
    return {
        repos: allData
    }
} 

export default GithubInfoView