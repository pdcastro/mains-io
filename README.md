# Sensing and controlling mains voltages with a Raspberry Pi


**Check the article published at: https://pdcastro.github.io/mains-io**

This repo contains:

* `docs` folder - Contents of the article (Jekyll website) linked above.

* `lib`, `scripts`, `Dockerfile` and others - Trivial Raspberry Pi app to support some
  experiments. The app monitors a GPIO input pin and replicates the input state to an
  output pin. The pin numbers are currently defined in `lib/index.ts`.

The app was tested with the [balena](https://www.balena.io) platform
([docs](https://www.balena.io/docs/learn/welcome/introduction/)).
If your balena fleet was called "ssr", the app could be deployed with the [balena
CLI's](https://www.balena.io/docs/reference/balena-cli/) command `"balena push ssr"`
on the directory where this repo was cloned.
