# Installation

## Pre-requisites

1. **Docker**: [Download Docker](https://docs.docker.com/get-docker/) for your operating system.

## Steps

1. Clone this repository and move to `portal-analytics` directory
   ```sh
   git clone https://github.com/ColoredCow/portal-analytics.git
   cd portal
   ```
2. Make sure Docker Desktop application is running and docker version is giving a proper output.
   ```sh
   docker --version
   ```
3. Create the `.env` file
   ```sh
   cp .env.example .env
   ```
5. Update environment variables in your `.env` file based on your environment.
6. Build the docker image and run the containers using just one command:
   ```sh
   docker-compose up -d --build
   ```
6. Your Cube.js API and Developer Playground should be accessible at http://localhost:4000
