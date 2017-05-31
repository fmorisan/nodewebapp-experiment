import Header from './Header'

const layoutStyle = {
    margin: '10% 20',
    padding: 20,
    border: '1px solid #ddd',
    textAlign: 'center',
    fontFamily: 'sans-serif'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout