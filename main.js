class Countdown {
  constructor(date, target) {
    this.element = target
    this.date = moment(date)
  }
  
  assemble() {
    this.now = moment()
    let timeDiff = moment.duration(this.date.diff(this.now))
    let timeDiffFormated = timeDiff.format('M D H m s SSS').split(" ");
    
    return this.properPlural(timeDiffFormated[0], 'month')
        //  + this.properPlural(timeDiffFormated[1], 'week')
         + this.properPlural(timeDiffFormated[1], 'day')
         + this.properPlural(timeDiffFormated[2], 'hour')
         + this.properPlural(timeDiffFormated[3], 'minute')
         + this.properPlural(timeDiffFormated[4], 'second')
        //  + this.properPlural(timeDiffFormated[6], 'millisecond')
  }

  properPlural(number, measrument) {
    if (number == 0 && measrument != 'second')
      return '';

    if (number == 1)
      return '<div class="row"><span>' + number + '</span> <i>' + measrument + '</i></div>';
    else
      return '<div class="row"><span>' + number + '</span> <i>' + measrument + 's</i></div>';
  }

  render() {
    this.element.innerHTML = this.assemble()
    setTimeout(() => {
      requestAnimationFrame(this.render.bind(this))
    }, 200)
  }
}

const happyDay = '2019-08-03 18:00:00'
const element = document.getElementById('countdown')
const countdown = new Countdown(happyDay, element)

// console.log(happyDay, element, countdown)
countdown.render()

// document.addEventListener('DOMContentLoaded', ( () => {
// }))