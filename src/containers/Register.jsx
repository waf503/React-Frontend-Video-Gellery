import React, {useState} from 'react'
import '../assets/styles/components/Register.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import Header from '../components/Header'


const Register = (props) =>{
    const [form, setValues] = useState({
        email: '',
        name:'',
        password:''
    })
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form)
        props.history.push('/')
    }
    return(
        <>
        <Header/>
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                        className="input_register" 
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInput}
                    />
                    <input 
                        className="input_register" 
                        type="text" 
                        placeholder="Correo"
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        className="input_register" 
                        type="password" 
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button type="submit" className="button_register">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
        </>
        )
}
const mapDispatchToProps = {
    registerRequest,
}

export default connect(null,mapDispatchToProps)(Register)