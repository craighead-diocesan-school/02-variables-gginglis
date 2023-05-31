// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')

  let lessons = prompt('How many lessons do you have left today?')

  let secondsLeft = (lessons * 3600)

  alert("That's " + secondsLeft + " seconds ☹️")
}
