import Link from 'next/link'

const PostLink = (post) => (
    <Link href={`/post?title=${post.title}`}>
        <a>{post.title}</a>
    </Link>
)

export default PostLink