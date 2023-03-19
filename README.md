# Canvas-Lite
Canvas Lite is a web app that pulls information through the `node-canvas-api` and uses a user authentication key to display simplified critical information about courses, upcoming assignments, due dates, and more. Our web app will be built using JavaScript, React, Tailwind CSS, and HTML.

###Building the Project

**Windows**: Add `--openssl-legacy-provider` add this to the package.json in scripts/start for `craco start` as a option, then `npm install`
**Unix / Linux**: No additional steps needed, just `npm install`

###Local development

**Install packages**: `yarn`
**Start middleware**: `yarn middleware`
**Start frontend**: `yarn start`