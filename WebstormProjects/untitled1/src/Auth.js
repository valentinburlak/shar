import React, {Component} from 'react'
import classes from './Auth.css'
import Button from './Button'

export default class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler}>
                        <input type="text" />
                        <input type="text" />

                        <Button
                            type="primary"
                            onClick={this.loginHandler}
                        >Войти
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >Зарегистрироваться
                        </Button>
                    </form>
                </div>

            </div>
        );
    }
}

