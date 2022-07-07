FROM debian:11
RUN apt-get update && apt-get install -y curl g++ less make procps python3 tini vim

SHELL ["/bin/bash", "--login", "-c"]

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN nvm install 16

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY tsconfig.json ./
COPY lib lib/
RUN npm run build
COPY scripts/start.sh scripts/

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["scripts/start.sh", "printlogs"]
