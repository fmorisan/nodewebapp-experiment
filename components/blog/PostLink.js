import Link from 'next/link'
const PostLink = (props) => (
    <div>
        <h3>
            <Link href={`/post?id=${props.post.id}`}>
                <a>
                    {props.post.title}
                </a>
            </Link>
        </h3>
    </div>
)

export default PostLink