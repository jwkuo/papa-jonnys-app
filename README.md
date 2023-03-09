# Papa Jonny's App
This is a demo app for a Web UI paired with a REST API. The Web UI is built with HTML, CSS, and JS. The REST API is built with Express. This app has been updated to work with [AWS Amplify](https://docs.amplify.aws/start/q/integration/js/). 
# Deployment
This app automatically deploys the backend and frontend for this app when the main branch is pushed to Github. It can also be deployed manually using the Amplify CLI.

To install the AWS Amplify CLI: `npm install -g @aws-amplify/cli`

If this is your first time using the AWS Amplify CLI, follow the [Getting Started steps](https://docs.amplify.aws/start/getting-started/installation/q/integration/js/)
# To Run Locally
1. Clone this repo.
2. Install packages with `npm install`
3. Run `npm run dev` to start the REST API. (http://localhost:3000).
4. Run `npx http-server` to host the Web UI. (http://localhost:8080).