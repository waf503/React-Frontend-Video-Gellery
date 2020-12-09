import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Header.scss'
import logoUser from '../assets/img/user-icon.png'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
//import className from 'classnames'


const Header = props =>{
    const { user } = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

   

    return(
        <header className="header">
            <Link className="Mi_logo" to="/">
                <h1 className="header__img">My Gallery</h1>
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser
                ?<img src={gravatar(user.email)} alt={user.email}/>
                :<img src={logoUser} alt="" />
                }

                <p>Perfil</p>
            </div>
            <ul>
                {hasUser ?
                    <li><a href="/" onClick={handleLogout}>{ user.name }</a></li>
                    : null                
                }
                {hasUser ?
                    <li><Link to="/login" onClick={handleLogout}>Cerrar Sesion</Link></li>
                    : <li><Link to="/login">Iniciar Sesion</Link></li>
                }
            </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

