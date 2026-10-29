<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/npm/oso.png" alt="Oso, le chat de CopyKat Studio" width="150">
</p>

<h1 align="center">CopyKat Studio by Oso</h1>

<p align="center">
  <b>Copiez le style de n'importe quel reel, story, post ou TikTok, avec vos propres photos et vos textes.</b><br>
  Et aussi : un téléchargeur de vidéos, des collages papier en demi-teinte et 51 styles de cinéma. Sur votre ordinateur, avec votre propre IA.
</p>

<p align="center">
  <a href="https://github.com/PaulVentseck-lib/copykat-studio#readme">English</a> · <a href="https://github.com/PaulVentseck-lib/copykat-studio/blob/main/README.es.md">Español</a> · <b>Français</b>
</p>

```bash
npx copykat-studio
```

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/create.png" alt="Créer comme une référence" width="860">
</p>

## Ce qu'il fait

### 🎬 Créer comme une référence
Donnez-lui un reel, une story, un post, un carrousel ou un TikTok que vous aimez (un lien ou un fichier) et vos photos
ou vidéos. CopyKat **mesure** la référence au lieu de deviner : les coupes (y compris les fondus et les transitions
douces), la durée de chaque plan, le tempo de la musique, les mouvements de caméra et la couleur. Votre IA lit la mise
en page et les textes, CopyKat mesure la taille, la graisse, le cadre et la couleur réels de chaque texte pour choisir
la police la plus proche, et il **se relit tout seul** : il place sa copie à côté de la référence et corrige ce qui ne
ressemble pas.

- MP4 pour les vidéos, PNG pour les images et carrousels, ou une référence image transformée en MP4 animé.
- Cadrage intelligent : chaque photo est recadrée autour du visage ou du produit, pas au centre.
- Choisissez la durée en secondes, écrivez des variantes de vos textes et produisez-les en lot.
- Trois moteurs : le moteur intégré, [HyperFrames](https://www.npmjs.com/package/hyperframes) (HTML + GSAP), ou le
  **mode directrice artistique**, où votre Claude ou votre ChatGPT conçoit la pièce avec des outils : il regarde ses
  images, les compare à la référence et les corrige.

### ⬇️ Télécharger des vidéos
**Télécharge toutes les vidéos téléchargeables de n'importe quelle page web.** Collez le lien, c'est tout.

- Une ou plusieurs qualités (2160p … 360p), mp4/mkv/webm/mov, ou **l'audio seul** (mp3, m4a, opus, wav, flac).
- Coupez un extrait (`1:30` → `2:10`), récupérez les sous-titres ou une playlist entière, ou collez plusieurs liens
  pour un **lot**.
- Vidéos avec vérification d'âge, privées ou d'Instagram : avec la session de votre navigateur ou un `cookies.txt`.

### ✂️ Collage papier en demi-teinte
Vos photos en découpages papier en demi-teinte qui s'assemblent tout seuls en stop-motion, avec un titre et de la
musique si vous voulez. Demi-teinte partout, seulement sur le fond, ou pas du tout.

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage-oso.gif" alt="Un collage fait avec CopyKat Studio" width="320">
</p>

### 🎨 51 styles de cinéma
Risographie, ukiyo-e, RPG en pixel art 16 bits, anime des années 80, cinéma muet des années 20, relevé LiDAR…
Chaque style apporte sa palette, ses polices, son étalonnage, ses transitions et ses mouvements. Utilisez-le pour
créer ou pour un collage. (Adaptés de Lemo-Opuscar, MIT.)

### 🤖 Votre propre IA
Utilisez ce que vous payez déjà : avec un abonnement, pas de frais d'API.

| Option | Comment |
|---|---|
| **ChatGPT Plus / Pro** | Via Codex, le programme officiel d'OpenAI. Un clic : CopyKat l'installe et vous vous connectez. |
| **Claude Pro / Max** | Via Claude Code : votre session habituelle, ou un jeton de `claude setup-token`. |
| **Clé d'API** | OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, tout service compatible OpenAI, ou **Ollama** sur votre ordinateur. |

Sans IA, CopyKat ne copie que le rythme, la durée et les coupes (ni textes, ni couleurs, ni mise en page), et il vous
le dit. Le téléchargement et les collages n'ont pas besoin d'IA.

### 🔒 Privé
Le studio tourne sur votre ordinateur, à `http://127.0.0.1:8080`, pour vous seul. Vos clés restent dans `~/.copykat`
(lisibles seulement par votre utilisateur) et les fichiers sont supprimés dès que vous les téléchargez ou au bout de
60 minutes. Chaque tâche garde un journal que vous ouvrez depuis sa carte : si quelque chose échoue, vous voyez
pourquoi. En français, anglais et espagnol.

## Captures

| Télécharger | Mon IA |
|---|---|
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/download.png" alt="Télécharger des vidéos" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/my-ai.png" alt="Choisir son IA" width="420"> |
| **Collage** | **Styles** |
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage.png" alt="Collage" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/styles.png" alt="51 styles de cinéma" width="420"> |

## Installer

**Windows :** téléchargez `CopyKat-Studio-…-Setup.exe` depuis la [dernière version](https://github.com/PaulVentseck-lib/copykat-studio/releases/latest), lancez-le et ouvrez
**CopyKat Studio** depuis le menu Démarrer ou le bureau. Tout est inclus (Python, ffmpeg et Node) : rien d'autre à
installer. Windows peut prévenir que l'application est inconnue : cliquez « Informations complémentaires » →
« Exécuter quand même ».

**Tous les systèmes** (Windows, macOS, Linux) :

Il vous faut **Python 3.10–3.13** et **ffmpeg**. Pour `npx` (et le moteur HyperFrames), aussi **Node 18+**.

```bash
# Le plus simple : installe tout la première fois et ouvre le studio
npx copykat-studio

# Ou seulement avec Python
pipx install "copykat-studio[all]"
copykat studio
```

ffmpeg : `winget install ffmpeg` (Windows) · `brew install ffmpeg` (macOS) · `sudo apt install ffmpeg` (Linux).

Le lanceur npm installe CopyKat dans son propre environnement (`~/.copykat/venv`), sans toucher au Python du système,
et le met à jour quand une nouvelle version sort. Paquets prêts pour Windows (x64), macOS (Intel et Apple Silicon) et
Linux (x86_64).

## Ligne de commande

```bash
copykat download "https://youtu.be/…" -q 1080 720           # un fichier par qualité
copykat download "https://youtu.be/…" --audio-only           # seulement le mp3
copykat download --lista liens.txt -q best                    # un lot, un lien par ligne
copykat download "https://youtu.be/…" --from 1:30 --to 2:10 --cookies-from-browser firefox
copykat collage photo1.jpg photo2.jpg --label "Tout frais" --format story -o collage.mp4
copykat --help
```

Il y a aussi un serveur MCP (`copykat-mcp`) pour qu'un assistant IA analyse des références et produise des pièces pour vous.

## Questions

**YouTube me demande de confirmer mon âge.** Ouvrez « Vidéos avec vérification d'âge, privées ou Instagram : utiliser
ma session » et choisissez un navigateur où vous êtes connecté, ou envoyez un `cookies.txt`. Sous Windows, Chrome et
Edge chiffrent leur session : utilisez Firefox, ou exportez `cookies.txt` avec l'extension « Get cookies.txt LOCALLY ».

**Le résultat ne ressemble pas à la référence.** Vérifiez que la barre du haut indique que votre IA est connectée (et
non « aucune »), laissez « Revoir » coché et essayez le moteur directrice artistique.

**Quelque chose a échoué.** Ouvrez le journal de la tâche depuis sa carte, ou le dossier `logs` indiqué en bas du studio.

## Licence

[Elastic License 2.0](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/LICENSE). Gratuit pour vous et pour
votre entreprise. **Le proposer à des tiers comme service hébergé ou géré (SaaS) nécessite une licence commerciale.**
Les éléments tiers gardent leurs licences (MIT, OFL) : voir
[NOTICE](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/NOTICE). Oso, le chat, appartient au bureau en
pixel art d'usepaul et n'est pas couvert par la licence.

Ne téléchargez que ce que vous avez le droit d'utiliser et respectez les conditions de chaque site.

---

<p align="center"><sub>Fait par PaulVentseck / usepaul · Oso dit miaou 🐾</sub></p>
