## Site Summary
TelemX is a visual interface and dashboard to view past and future SpaceX launch data. It is a Javascript, HTML, CSS, and React project designed to showcase API interfacing and UI/UX experience
#### Earth
  * Home page to browse and select a launch site or view global launch data
#### Upcoming Implementations
* Hangar
  * Page for user to browse detailed vehicle information
* Fetch and store larger sums of API data
  * Helps alleviate requests/hour limit of main API
* Make custom loading icon (rocket?, fairing sep?)
* Experiment with a "launch replay" feature
* Introduce an abort controller to prevent unnecessary network requests and rendering the wrong data
* Switch to a React view model
* RSS feed in SpaceX, X, tweets
* Embed launch streams?
* Add search filter
#### Known Bugs
* Loading icon sometimes "stops" before rendering new data

## Developer
  * Benjamin McMahon
  * [GitHub](https://github.com/benjaminmcmahon3)
  * [LinkedIn](https://www.linkedin.com/in/benjaminmcmahon3/)

## Project 
  * [GitHub](https://github.com/benjaminmcmahon3/TelemX)
  * Thanks to Open AI for building such powerful tools, DALL-E used to create Earth graphic
  * Thanks goes out to Lucabon for his work on the Falcon SVG art.
    * By Lucabon (based on work of Markus Säynevirta and Craigboy and Rressi ) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=75671798

## API
#### All credit for the incredibly data rich and well maintained [Launch Library 2](https://thespacedevs.com/llapi) API goes to [The Space Devs](https://thespacedevs.com/).
  * Rate limited API (15 requests/hour)
    * [Docs](https://ll.thespacedevs.com/docs/)
    * [Endpoints](https://ll.thespacedevs.com/2.2.0/)
  * Unlimited stale API
    * [Docs](https://lldev.thespacedevs.com/docs/#/)
    * [Endpoints](https://lldev.thespacedevs.com/2.2.0/)