import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const legacy = path.join(root, "akvus.github.io", "src", "data");

function readExport(file, exportName) {
  const source = fs.readFileSync(path.join(legacy, file), "utf8");
  const marker = `export const ${exportName}`;
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`Could not find ${exportName} in ${file}`);
  const executable = source
    .slice(start)
    .replace(new RegExp(`export const ${exportName}\\s*:[^=]+=`), `const ${exportName} =`);
  return vm.runInNewContext(`${executable}\n${exportName};`, Object.create(null));
}

function yaml(value) {
  return JSON.stringify(value, null, 0);
}

function frontMatter(entries) {
  return `---\n${entries.map(([key, value]) => `${key}: ${yaml(value)}`).join("\n")}\n---\n`;
}

function normalizeArticle(content) {
  const lines = content.replace(/^\s*\n/, "").replace(/\s+$/, "").split("\n");
  const indents = lines.filter((line) => line.trim()).map((line) => line.match(/^\s*/)[0].length);
  const indent = Math.min(...indents);
  const normalized = lines.map((line) => line.slice(Math.min(indent, line.length)));
  if (normalized[0]?.startsWith("# ")) {
    normalized.shift();
    while (normalized[0] === "") normalized.shift();
  }
  return `${normalized.join("\n").trim()}\n`;
}

function writePageBundle(section, slug, metadata, body) {
  const directory = path.join(root, "content", section, slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.md"), `${frontMatter(metadata)}\n${body.trim()}\n`);
}

for (const post of readExport("blog.ts", "blogData")) {
  writePageBundle("posts", post.slug, [
    ["title", post.title],
    ["slug", post.slug],
    ["date", `${post.publishedAt}T09:00:00+01:00`],
    ["description", post.excerpt],
    ["author", "Maciej Zawieja"],
    ["categories", post.categories],
    ["tags", post.categories],
    ["cover", "cover.jpg"],
    ["draft", false],
  ], normalizeArticle(post.content));
}

for (const app of readExport("apps.ts", "appsData")) {
  writePageBundle("apps", app.id, [
    ["title", app.title],
    ["slug", app.id],
    ["date", `${app.year}-01-01T00:00:00Z`],
    ["description", app.description],
    ["year", app.year],
    ["category", app.category],
    ["technologies", app.technologies],
    ["features", app.features],
    ["screenshots", app.screenshots],
    ["appStoreUrl", app.appStoreUrl ?? ""],
    ["playStoreUrl", app.playStoreUrl ?? ""],
    ["websiteUrl", app.websiteUrl ?? ""],
    ["draft", false],
  ], app.description);
}

const legacyVideoDates = {
  "patrick-guide-masoala": "2025-03-10T23:03:52Z",
};

for (const video of readExport("videos.ts", "videosData")) {
  writePageBundle("videos", video.id, [
    ["title", video.title],
    ["slug", video.id],
    ["date", legacyVideoDates[video.id]],
    ["description", video.description],
    ["videoUrl", video.videoUrl],
    ["thumbnailUrl", video.thumbnailUrl],
    ["topics", video.categories],
    ["draft", false],
  ], video.description);
}

console.log("Migrated 5 posts, 5 apps, and 1 video from the legacy React data.");
