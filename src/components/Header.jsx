import PropType from 'prop-types'
function Header({ text }) {
    const headerStyles = {
        backgroundColor:'blue',
        color:'red',
        }
  return (
    <header  style={headerStyles}>
        <div className="container">
            <h2> {text} </h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:'Feedback UI',
}

Header.propTypes = {
    text: PropType.string,
}

export default Header