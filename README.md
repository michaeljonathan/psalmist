# ![Psalmist](http://michaeljonathan.github.io/psalmist/images/logo-1.png)

Psalmist is a simple web app I created to learn [Ember.js](emberjs.com). It's built with [Ember CLI](www.ember-cli.com) and so the files follow its project structure.

Psalmist is currently a work-in-progress [worship presentation software](https://en.wikipedia.org/wiki/Church_software#Worship_presentation_software). It is a purely front-end client, and relies on [Book of Psalms](https://github.com/michaeljonathan/bookofpsalms) as the back-end RESTful API server to store service lists, songs, backgrounds, etc. 

 While serving in the projection ministry in my church, I realized that no currently-available presentation software fits our needs. They tend to be packed with features that we don't need. We'd like to have dual-language support and high flexibility in changing the visual aesthetics of the lyrics; something that [our current presentation software](http://www.renewedvision.com/propresenter.php) don't provide.

While my primary aim is to write this app for personal learning, perhaps, it may become mature enough to be used during service.

## Prerequisites

Psalmist needs the following:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [Book of Psalms](https://github.com/michaeljonathan/bookofpsalms)

## Installation

* `git clone https://github.com/michaeljonathan/psalmist`
* `cd psalmist`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Make sure [Book of Psalms](https://github.com/michaeljonathan/bookofpsalms) is running in the background
* Open [http://localhost:4200](http://localhost:4200) in a web browser (Chrome is preferred)
