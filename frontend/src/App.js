import React from 'react'
import axios from 'axios'

// componentes
import InputForm from './components/InputForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Table from './components/Table'

// app css
import './css/App.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstHour: '',
            secondHour: '',
            dayHours: '',
            dayMinutes: '',
            nightHours: '',
            nightMinutes: '',
            errorMessage: '',
            isLoading: false
        }
    }

    // com o order é possível utilizar essa mesma função para tratar os dois casos de mudança dos horários
    onChangeHourHandler = (content, order) => {
        this.setState({
            [order]: content.target.value
        })
    }

    onSubmitButton = () => {
        const data = {
            firstTime: this.state.firstHour,
            secondTime: this.state.secondHour
        }

        this.setState({ isLoading: true })

        axios({
            method: 'POST',
            url: 'https://api-proveu.herokuapp.com/calculo',
            data: data
        })
            // define os valores da resposta do backend nos respectivos valores do state
            .then(resp => {
                this.setState({
                    dayHours: resp.data.dayHours,
                    dayMinutes: resp.data.dayMinutes,
                    nightHours: resp.data.nightHours,
                    nightMinutes: resp.data.nightMinutes,
                    errorMessage: '',
                    isLoading: false
                })
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    dayHours: '',
                    dayMinutes: '',
                    nightHours: '',
                    nightMinutes: '',
                    errorMessage: this.getMessageByErrorCode(error.response.data)
                })
            })
    }

    // adicionara a mensagem de erro no state a partir do codigo de erro recebido do backend
    getMessageByErrorCode = errorCode => {
        switch(errorCode) {
            case 'firstTime-invalid':
                return 'Primeiro horário inválido!'
            case 'secondTime-invalid':
                return 'Segundo horário inválido!'
            case 'twentyfourHours-invalid':
                return 'Turnos não podem ser de 24 horas!'
            default:
                return 'Erro desconhecido!'
        }
    }

    // retornara a tabela com as informações dos horários caso pelo menos o valor de horas diárias esteja definido no state
    renderTable = () => {
        if (this.state.dayHours) {
            return (
                <Table 
                    dayHours={this.state.dayHours} 
                    dayMinutes={this.state.dayMinutes} 
                    nightHours={this.state.nightHours} 
                    nightMinutes={this.state.nightMinutes} 
                />
            )
        }
    }

    // retornara a mensagem de erro caso ela exista no state
    renderErrorMessage = () => {
        if (this.state.errorMessage) {
            return <span>{this.state.errorMessage}</span>
        }
    }

    render() {
        return (
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <InputForm isLoading={this.state.isLoading} onChangeHourHandler={this.onChangeHourHandler} onSubmitButton={this.onSubmitButton} />
                    {this.renderTable()}
                    {this.renderErrorMessage()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App