# CMLI

CMLI is a Christian music lyric database using Astro, Bun and Deno. Bun is used as a package manager and Deno is used as the runtime.

## Getting Started

CMLI uses Orama Cloud as its search engine. Sign up for Orama Cloud and then add these environment variables:

```
ORAMA_API_KEY=
ORAMA_ENDPOINT=
```

The database is structured using JSON:

```
[{
    "name": string,
    "artist": string,
    "lyrics": string,
    "copyright": string,
    "uuid": string
}]
```