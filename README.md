# Sensing and controlling mains voltages with a Raspberry Pi

This repo contains:

* `docs` folder - The contents of an article (Jekyll website) about sensing and
  controlling mains voltages with a Raspberry Pi and solid state relays (SSRs).
  The article is hosted by GitHub Pages at: https://pdcastro.github.io/mains-io

* `lib`, `scripts`, `Dockerfile` and others - Trivial Raspberry Pi app to support some
  experiments. The app monitors a GPIO input pin and replicates the input state to an
  output pin. The pin numbers are currently defined in `lib/index.ts`.

The app was tested with the [balena](https://www.balena.io) platform
([docs](https://www.balena.io/docs/learn/welcome/introduction/)).
If your balena fleet was called "ssr", the app could be deployed with the [balena
CLI's](https://www.balena.io/docs/reference/balena-cli/) command `"balena push ssr"`
on the directory where this repo was cloned.
