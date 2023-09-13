resume ki link add karna

smooth scrooling ✅
gsap
learn gsap
scrolltrigger

# 'to' is used to animate an element from its current state to a specified end state,

while

# "from" is used to animate an element from a specified start state to its current state.

# clamp(minimum, maximum, valueToClamp)

- set the clamping range to between 0 and 100, and clamp 105
  gsap.utils.clamp(0, 100, 105); // returns 100

- in the same range, clamp -50
  gsap.utils.clamp(0, 100, -50); // returns 0

- and clamp 20
  gsap.utils.clamp(0, 100, 20); // returns 20

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

# elem.getBoundingClientRect()
