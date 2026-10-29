<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/npm/oso.png" alt="Oso, the CopyKat Studio cat" width="150">
</p>

<h1 align="center">CopyKat Studio by Oso</h1>

<p align="center">
  <b>Copy the style of any reel, story, post or TikTok — and make it with your own photos and texts.</b><br>
  Plus a video downloader, a halftone paper-collage maker and 51 film looks. Runs on your computer, with your own AI.
</p>

<p align="center">
  <a href="https://pypi.org/project/copykat-studio/"><img alt="PyPI" src="https://img.shields.io/pypi/v/copykat-studio?color=f4b63a&label=pypi"></a>
  <a href="https://www.npmjs.com/package/copykat-studio"><img alt="npm" src="https://img.shields.io/npm/v/copykat-studio?color=2fa6e8&label=npm"></a>
  <img alt="Python 3.10–3.13" src="https://img.shields.io/badge/python-3.10–3.13-3c3f6b">
  <img alt="Windows · macOS · Linux" src="https://img.shields.io/badge/windows%20·%20macOS%20·%20linux-✓-3c3f6b">
  <a href="https://github.com/PaulVentseck-lib/copykat-studio/blob/main/LICENSE"><img alt="License: Elastic 2.0" src="https://img.shields.io/badge/license-Elastic%202.0-7a6f9b"></a>
</p>

<p align="center">
  <b>English</b> · <a href="https://github.com/PaulVentseck-lib/copykat-studio/blob/main/README.es.md">Español</a> · <a href="https://github.com/PaulVentseck-lib/copykat-studio/blob/main/README.fr.md">Français</a>
</p>

```bash
npx copykat-studio
```

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/create.png" alt="Create like a reference" width="860">
</p>

## What it does

### 🎬 Create like a reference
Give it a reel, story, post, carousel or TikTok you like — a link or a file — and your photos or clips. CopyKat
**measures** the reference instead of guessing: cuts (including fades and soft transitions), how long each shot
lasts, the music's beat, camera motion and colour. Your AI then reads the layout and the texts, CopyKat measures the
real size, weight, box and colour of each text to pick the closest font, and it **reviews itself**: it renders its
copy next to the reference and fixes what doesn't match.

- MP4 for videos, PNG for images and carousels — or an image reference turned into an animated MP4.
- Smart framing: each photo is cropped around the face or the product, not the centre.
- Set the length in seconds, write variants of your texts and make them in a batch.
- Three engines: the built-in renderer, [HyperFrames](https://www.npmjs.com/package/hyperframes) (HTML + GSAP), or
  **art director mode**, where your own Claude or ChatGPT designs the piece with tools — it looks at its frames,
  compares them with the reference and fixes them.

### ⬇️ Download videos
**Downloads every downloadable video from any web page.** Paste the link and that's it.

- Pick one or several qualities (2160p … 360p), mp4/mkv/webm/mov, or **audio only** (mp3, m4a, opus, wav, flac).
- Cut a range (`1:30` → `2:10`), get subtitles, a whole playlist, or paste many links for a **batch**.
- Age-restricted, private or Instagram videos: use your own browser session or a `cookies.txt`.

### ✂️ Halftone paper collage
Your photos as halftone paper cut-outs that assemble themselves in stop-motion, with a caption and optional music.
Halftone on everything, only on the background, or off.

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage-oso.gif" alt="A collage made with CopyKat Studio" width="320">
</p>

### 🎨 51 film looks
Risograph print, ukiyo-e, 16-bit pixel RPG, 80s cel anime, 1920s silent film, LiDAR survey… Each look brings its palette,
fonts, grade, transitions and motion. Use one to create or for a collage. (Adapted from Lemo-Opuscar, MIT.)

### 🤖 Your own AI
Use what you already pay for — no extra API fees with a subscription:

| Option | How |
|---|---|
| **ChatGPT Plus / Pro** | Through Codex, OpenAI's official program. One click: CopyKat installs it and you sign in. |
| **Claude Pro / Max** | Through Claude Code: your existing session, or a token from `claude setup-token`. |
| **API key** | OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, any OpenAI-compatible service, or **Ollama** on your computer. |

Without an AI, CopyKat only copies the rhythm, length and cuts — no texts, colours or layout — and it tells you so.
Downloading and collages don't need an AI.

### 🔒 Private by design
The studio runs on your computer at `http://127.0.0.1:8080`, only for you. Your keys stay in `~/.copykat` (readable only
by your user), and files are deleted when you download them or after 60 minutes. Every job keeps a log you can open
from its card, so when something fails you see why. English, Spanish and French.

## Screenshots

| Download | My AI |
|---|---|
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/download.png" alt="Download videos" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/my-ai.png" alt="Choose your AI" width="420"> |
| **Collage** | **Styles** |
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage.png" alt="Collage" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/styles.png" alt="51 film looks" width="420"> |

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/mobile.png" alt="On a phone" width="220"><br>
  <sub>The layout adapts to small windows too.</sub>
</p>

## Install

**Windows:** download `CopyKat-Studio-…-Setup.exe` from the [latest release](https://github.com/PaulVentseck-lib/copykat-studio/releases/latest), run it and open
**CopyKat Studio** from the Start menu or the desktop. Everything is included (Python, ffmpeg and Node): nothing
else to install. Windows may warn that the app is unknown: click «More info» → «Run anyway».

**Any system** (Windows, macOS, Linux):

You need **Python 3.10–3.13** and **ffmpeg**. For `npx` (and the HyperFrames engine) you also need **Node 18+**.

```bash
# Easiest: installs everything the first time and opens the studio
npx copykat-studio

# Or with Python only
pipx install "copykat-studio[all]"
copykat studio
```

Getting ffmpeg: `winget install ffmpeg` (Windows) · `brew install ffmpeg` (macOS) · `sudo apt install ffmpeg` (Linux).

The npm launcher installs CopyKat in its own environment (`~/.copykat/venv`), without touching your system Python,
and updates it when a new version comes out. Ready-made packages for Windows (x64), macOS (Intel and Apple Silicon)
and Linux (x86_64).

## Command line

```bash
copykat download "https://youtu.be/…" -q 1080 720           # one file per quality
copykat download "https://youtu.be/…" --audio-only           # just the mp3
copykat download --lista links.txt -q best                    # a batch, one link per line
copykat download "https://youtu.be/…" --from 1:30 --to 2:10 --cookies-from-browser firefox
copykat collage photo1.jpg photo2.jpg --label "Freshly baked" --format story -o collage.mp4
copykat --help
```

There's also an MCP server (`copykat-mcp`) so an AI assistant can analyse references and render pieces for you.

## FAQ

**YouTube asks me to confirm my age.** Open «Age-restricted, private or Instagram videos: use my session» and pick a
browser where you're signed in, or upload a `cookies.txt`. On Windows, Chrome and Edge encrypt their session: use
Firefox, or export `cookies.txt` with the «Get cookies.txt LOCALLY» extension.

**The result doesn't look like the reference.** Check the top bar says your AI is connected (not «none»), keep
«Review» on, and try the art director engine.

**Something failed.** Open the job's log from its card, or the `logs` folder shown at the bottom of the studio.

## License

[Elastic License 2.0](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/LICENSE). Free to use for yourself
and your business. **Offering it to others as a hosted or managed service (SaaS) requires a commercial license.**
Third-party parts keep their own licenses (MIT, OFL) — see
[NOTICE](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/NOTICE). Oso, the cat, belongs to usepaul's
pixel-art office and isn't covered by the license grant.

Download only what you have the right to use, and respect each site's terms.

---

<p align="center"><sub>Made by PaulVentseck / usepaul · Oso says miau 🐾</sub></p>
