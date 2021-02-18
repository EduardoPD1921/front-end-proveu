import React from 'react'

// inputform css
import '../css/InputForm.css'

const InputForm = ({ onChangeHourHandler, onSubmitButton, isLoading }) => {

    // função renderiza o botão ou a animação de loading de acordo com o valor da props isLoading
    const renderButton = () => {
        if (isLoading) {
            return (
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            )
        }

        return (
            <button onClick={() => onSubmitButton()} className="btn waves-effect waves-light" type="submit" name="action">
                Calcular
                <i className="material-icons right"></i>
            </button>
        )
    }

    return (
        <div className="z-depth-5 input-content">
            <h5>Jornada de trabalho</h5>
            <div className="time-inputs">
                <input onChange={c => onChangeHourHandler(c, 'firstHour')} placeholder="00:00" type="text" className="timepicker1"></input>
                às
                <input onChange={c => onChangeHourHandler(c, 'secondHour')} placeholder="00:00" type="text" className="timepicker2"></input>
            </div>
            <div className="submit-button">
                {renderButton()}
            </div>
        </div>
    )
}

export default InputForm