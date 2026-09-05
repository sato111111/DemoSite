import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;

let site = 'https://example.github.io';
let base = '/';

if (repository) {
  const [owner, repo] = repository.split('/');
  site = `https://${owner}.github.io`;

  if (repo !== `${owner}.github.io`) {
    base = `/${repo}`;
  }
}

export default defineConfig({
  site,
  base,
  output: 'static'
});