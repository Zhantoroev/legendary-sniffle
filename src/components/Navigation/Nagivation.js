const Navigation = ({ onRouteChange, route }) => {
  return (
    <nav style ={{display: 'flex', justifyContent: 'flex-end', color:'black'}}>
        <p onClick={() => onRouteChange('home')} className='f3 link din pa3 mr2 pointer'>home</p>
        <p onClick={() => onRouteChange('mentor')} className='f3 link din pa3 mr2 pointer'>Register Mentor</p>
        <p onClick={() => onRouteChange('register')} className='f3 link din pa3 mr2 pointer'>Mentees</p>
        <p onClick={() => onRouteChange('signin')} className='f3 link din pa3 mr2 pointer'>Signin</p>
    </nav>
  )
}

export default Navigation;