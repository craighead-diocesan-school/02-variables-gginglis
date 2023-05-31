// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')

  let cost = prompt('What is the cost before GST ?')

  let gstPrice = (cost * 1.15)

  alert('The cost with GST is $' + gstPrice)
}
