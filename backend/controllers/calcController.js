exports.get_calc = (req, res, next) => {
    const firstTime = req.body.firstTime
    const secondTime = req.body.secondTime
    
    const firstTimeValidator = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(firstTime)
    const secondTimeValidator = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(secondTime)

    // validações
    if (firstTimeValidator === false) {
        return res.status(400).send('firstTime-invalid')
    }

    if (secondTimeValidator === false) {
        return res.status(400).send('secondTime-invalid')
    }

    // dividindo o horário em horas e minutos
    const firstTimeSplit = firstTime.split(':')
    const secondTimeSplit = secondTime.split(':')

    let firstTimeHours = firstTimeSplit[0]
    let firstTimeMinutes = firstTimeSplit[1]

    let secondTimeHours = secondTimeSplit[0]
    let secondTimeMinutes = secondTimeSplit[1]

    if (firstTimeHours == secondTimeHours && firstTimeMinutes == secondTimeMinutes) {
        return res.status(400).send('twentyfourHours-invalid')
    }

    let dayHours = 0
    let dayMinutes = 0

    let nightHours = 0
    let nightMinutes = 0

    let minutesCounter = firstTimeMinutes
    let hoursCounter = firstTimeHours

    for(let i = 0; i !== 1;) {
        // contador de minutos geral
        if (minutesCounter == 60) {
            hoursCounter++
            minutesCounter = 0
        }

        // contagem das horas diurnas
        if (dayMinutes == 60 && hoursCounter >= 5 && hoursCounter <= 22) {
            dayHours++
            dayMinutes = 0
        }

        // contagem das horas noturnas
        if (nightMinutes == 60 && (hoursCounter >= 22 || hoursCounter <= 5)) {
            nightHours++
            nightMinutes = 0
        }

        // contador de horas geral
        if (hoursCounter == 24) {
            hoursCounter = 0
        }

        // condição atingida quando o horári inicial encontrar o segundo horário
        if (minutesCounter == secondTimeMinutes && hoursCounter == secondTimeHours) {

            // formatando as casas decimais dos números abaixo de 10
            if (dayHours < 10) {
                dayHours = `0${dayHours}`
            }

            if (dayMinutes < 10) {
                dayMinutes = `0${dayMinutes}`
            }

            if (nightHours < 10) {
                nightHours = `0${nightHours}`
            }

            if (nightMinutes < 10) {
                nightMinutes = `0${nightMinutes}`
            }

            const response = {
                dayHours: dayHours,
                dayMinutes: dayMinutes,
                nightHours: nightHours,
                nightMinutes: nightMinutes
            }

            return res.send(JSON.stringify(response))
        }

        // contador de minutos diurno
        if (hoursCounter >= 5 && hoursCounter < 22) {
            dayMinutes++
        }

        // contador de minutos noturno
        if (hoursCounter >= 22 || hoursCounter < 5) {
            nightMinutes++
        }

        minutesCounter++
    }
}