# My Neocities Website

This is the source code for [my Neocities website](https://myles.neocities.org). It was built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) and is hosted on [Neocities](https://neocities.org).

It's licensed under the [BSD 2-Clause "Simplified" License](./LICENSE), which means you can fork it and make any changes you want as long as you include the license.

I've written up [how I built the CI/CD system for auto-deploy using GitHub Actions](https://myles.garden/2026/06/08/neocities-deploy-github-actions).

## Running Locally

```console
git clone https://github.com/myles/myles-neocities-org.git
cd myles-neocities-org
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

To build the production site:

```console
npm run build
```

## A Note on Support

This is a personal website, shared in the spirit of learning in the open. You're very welcome to fork it, poke around, and borrow ideas. But I'm not able to offer support, fix bugs in your fork, or answer questions about getting it running. If something breaks, you get to keep both pieces. 🙂

That said, the [Astro](https://docs.astro.build/) and [Tailwind](https://tailwindcss.com/docs) docs are both excellent, and the Neocities community is friendly.
