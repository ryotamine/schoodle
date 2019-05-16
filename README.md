# Schoodle Project

Schoodle is a full-stack web application built with HTML, CSS, JS, jQuery, AJAX, Node, Express, SQL, and Knex that allows users to schedule events and share them with others.

## Final Product

!["Screenshot of home page"](https://github.com/ryotamine/schoodle/blob/master/docs/index.png)
!["Screenshot of create event page"](https://github.com/ryotamine/schoodle/blob/master/docs/create_event.png)
!["Screenshot of share event page"](https://github.com/ryotamine/schoodle/blob/master/docs/share_event.png)
!["Screenshot of poll event page"](https://github.com/ryotamine/schoodle/blob/master/docs/poll_event.png)
!["Screenshot of event results page"](https://github.com/ryotamine/schoodle/blob/master/docs/results_event.png)

## Dependencies

- body-parser: 1.15.2
- cookie-parser: 1.4.4
- dotenv: 7.0.0
- ejs: 2.4.1
- express: 4.13.4
- i: 0.3.6
- knex: 0.16.3
- knex-logger: 0.1.0
- moment: 2.24.0
- morgan: 1.7.0
- node-sass: 4.11.0
- node-sass-middleware: 0.9.8
- pg: 6.0.2
- sass: 1.17.3

## Getting Started

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
4. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
5. Run the server: `npm run local`
6. Visit `http://localhost:8080/`

## Functionality

Schoodle is an app for event scheduling. A host can create an event through a form. After the host creates the event, Schoodle will generate a unique URL that the host can then share with their friends.

Once the guest receives the invitation link to the event, they can copy the link to view it in their browser. There, they can vote on their availability and view the results of the event poll. They are also provided with the options to decline the event altogether or modify their responses after submission.

Schoodle is designed to allow guests with the unique event link to poll without logging in or registering. The view results page is dynamic and reflects the choices of the guests thereby allowing efficient decision-making.

## Contributors

- Ryota Mine (https://github.com/ryotamine)
- Sarah Farah (https://github.com/farahsaa)
- Saba Zubair (https://github.com/sabazubair)
- Patrick McKeegan (https://github.com/pmckeegan)