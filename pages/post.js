import Layout from '../components/MyLayout'
import PostComponent from '../components/blog/Post'
import fetch from 'isomorphic-fetch'

const Content = (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>Blog post content.</p>
    </div>
) 

const PostView = (props) => (
    <Layout>
        <PostComponent post={props.post} />
    </Layout>
)

PostView.getInitialProps = async ({pathname, query}) => {
    let id = query.id
    let postReq = await fetch(`http://localhost:3000/api/posts/${id}/`)
    let post = await postReq.json()
    return {
        post: post
    }
}

export default PostView