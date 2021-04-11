/**
 @abstract calculate the day on a given date
@params input_days:Object containse date and a value 
@returns days with value
 */
export const daysCalculator = (input_days) => {
    let days: number[] = [0,0,0,0,0,0,0]
    for (let key in(input_days)) {
        let date = key.split("-");
        let q = parseInt(date[2])
        let m = parseInt(date[1])
        let year = parseInt(date[0])
        if(m >= 1 && m <= 2) {
            m += 12
            year -= 1
        }
        let k = year % 100
        let j = Math.floor(year/100)
        let f = q + Math.floor(((13*(m+1))/5)) +k+ Math.floor((k/4)) +Math.floor((j/4))-2*j
        let day
        if (f < 0) {
            day = f % 7
            day === -0 ? day = 0 : day += 7
        
        } else {
            day = f % 7
        }
        days[day] += input_days[key]
    }

    days = missingValues(days)
    const output_day = {
        "Mon": days[2],
        "Tue": days[3],
        "Wed": days[4],
        "Thu": days[5],
        "Fri": days[6],
        "Sat": days[0],
        "Sun": days[1]
    }
    return output_day

}

const missingValues = (days) => {
    if(!days[0]) {
        console.log("called")
        days[0] = (days[2] + 5*days[1]) / 6
    }
    if(!days[3]) {
        days[3] = (5*days[2] + days[1]) / 6
    }
    if(!days[4]) {
        days[4] = (4*days[2] + 2*days[1]) / 6
    }
    if(!days[5]) {
        days[5] = (days[2] + days[1]) / 2
    }
    if(!days[6]) {
        days[6] = (days[2] + 2*days[1]) / 3
    }
    return days
}