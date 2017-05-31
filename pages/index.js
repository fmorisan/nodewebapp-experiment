import fetch from 'isomorphic-fetch'
import Layout from '../components/MyLayout'
import PostLink from '../components/blog/PostLink'

const Index = (props) => (
    <Layout>
        <h1>Blog</h1>
        {props.posts.map((post) => (
            <PostLink post={post} key={post.id}/>
        ))}
    </Layout>
)

Index.getInitialProps = async ({pathname, query}) => {
    let posts = await fetch('http://localhost:3000/api/posts')
    let postList = await posts.json()
    console.log(postList)
    return {
        posts: postList
    }
}

export default Index