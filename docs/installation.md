### Pre-requisites

#### Docker

Download docker for your operating system: https://docs.docker.com/get-docker/

## Installation steps

1. Clone this repository and move to `portal-analytics` directory
   ```sh
   git clone https://github.com/ColoredCow/portal-analytics.git
   cd portal
   ```
2. Make sure Docker Desktop application is running and docker version is giving a proper output.
   ```sh
   docker --version
   ```
3. Copy `.env.example` as `.env`
4. Update environment variables in your `.env` file based on your environment.
5. Build the docker image and run the containers using just one command:
   ```sh
   docker-compose up -d --build
   ```
6. Your Cube.js API and Developer Playground should be accessible at http://localhost:4000
