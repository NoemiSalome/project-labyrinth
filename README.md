# Bootcamp-Project #13: Project Labyrinth
This weeks project was about creating a text-based mazegame. The data was fetched from an API and stored by using redux. Another Focus was the UX of the app by handling the response delay. The app also had to be responsive.

## Learning content and lessons learned:
- use redux to store the current state of the gamie
- UX of the app by handling the response delay
- use thunks to wrap API calls
- to send JSON in the body of a request

One thing that we found challenging was the fact that there are lot of places where things can go wrong, and since there are several things to wrap up in different places, it can be hard to figure out where the mistake has been done, whether it's in the reducers or in any of the components. However, we found the warnings very useful, since when something went wrong, the warnings were quite specific, so it helped guiding us to the right place to fix it.

This week we're both really happy it was a pair programming week, since it would have been a lot harder to wrap things up and get everything working if we had been working separately. The team work was great fun.
If we had more time we would have created a go back button, using the history reducer that we have already created. We might also have added a re-start button after reaching the end of the game.

## View it live
https://therese-and-noemi-labyrinthgame.netlify.app/
