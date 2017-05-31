const paraStyle = {
    textAlign: 'left'
}

const PostView = ({post}) => (
    <div>
        <h1>{post.title}</h1>
        {post.content.split('    ').map((line, index) => (
            <p style={paraStyle} key={index}>{line}</p>
        ))}
    </div>
)

export default PostView