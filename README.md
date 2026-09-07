# maciejzawieja.dev

A custom Hugo site for Maciej Zawieja’s writing, app portfolio, and videos. The design lives in `themes/maciej-editorial`; it does not depend on an external Hugo theme or a JavaScript build tool.

## Run locally

The project is pinned to Hugo Extended 0.165.0.

```sh
hugo server --buildDrafts
```

If Hugo is not installed, use Docker from the project directory:

```sh
docker run --rm -it -p 1313:1313 \
  -v "$PWD:/project" \
  -w /project \
  ghcr.io/gohugoio/hugo:v0.165.0 \
  server --bind 0.0.0.0 --buildDrafts
```

## Create content

Create an article as a page bundle so its cover image is stored with the post:

```sh
hugo new content posts/my-article/index.md
```

Article front matter supports `title`, `date`, `description`, `author`, `categories`, `tags`, `cover`, and `draft`. Put the referenced cover file next to `index.md`.

App pages additionally support `year`, `category`, `technologies`, `features`, `screenshots`, `appStoreUrl`, `playStoreUrl`, and `websiteUrl`.

## Build and deploy

```sh
hugo --gc --minify --panicOnWarning --cleanDestinationDir
```

The Pages workflow builds pull requests and deploys pushes to `main`. After adding a GitHub remote, configure the repository’s Pages source as **GitHub Actions** and set `maciejzawieja.dev` as its custom domain.

## Legacy source

`akvus.github.io/` is the previous React site and is intentionally ignored by this project. The migration can be reproduced with:

```sh
node scripts/migrate-legacy.mjs
```

The script recreates the Markdown content from the legacy TypeScript data. It does not download cover images.
