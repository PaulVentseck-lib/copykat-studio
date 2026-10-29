<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/npm/oso.png" alt="Oso, el gato de CopyKat Studio" width="150">
</p>

<h1 align="center">CopyKat Studio by Oso</h1>

<p align="center">
  <b>Copia el estilo de cualquier reel, story, post o TikTok y hazlo con tus fotos y tus textos.</b><br>
  Y además: descargador de vídeos, collage de papel en semitono y 51 estilos de cine. En tu ordenador, con tu propia IA.
</p>

<p align="center">
  <a href="https://github.com/PaulVentseck-lib/copykat-studio#readme">English</a> · <b>Español</b> · <a href="https://github.com/PaulVentseck-lib/copykat-studio/blob/main/README.fr.md">Français</a>
</p>

```bash
npx copykat-studio
```

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/create.png" alt="Crear como una referencia" width="860">
</p>

## Qué hace

### 🎬 Crear como una referencia
Dale un reel, story, post, carrusel o TikTok que te guste (un enlace o un archivo) y tus fotos o vídeos. CopyKat
**mide** la referencia en vez de adivinar: los cortes (también los fundidos y las transiciones suaves), cuánto dura
cada plano, el ritmo de la música, el movimiento de cámara y el color. Tu IA lee la maquetación y los textos,
CopyKat mide el tamaño, el grosor, la caja y el color reales de cada texto para elegir la letra más parecida, y
**se revisa sola**: pinta su copia al lado de la referencia y corrige lo que no se parece.

- MP4 para vídeos, PNG para imágenes y carruseles, o una referencia en imagen convertida en un MP4 animado.
- Encuadre inteligente: cada foto se recorta alrededor de la cara o del producto, no por el centro.
- Elige la duración en segundos, escribe variantes de tus textos y hazlas en lote.
- Tres motores: el propio, [HyperFrames](https://www.npmjs.com/package/hyperframes) (HTML + GSAP) o el **modo
  directora de arte**, en el que tu Claude o tu ChatGPT diseña la pieza con herramientas: mira sus fotogramas, los
  compara con la referencia y los corrige.

### ⬇️ Descargar vídeos
**Baja todos los vídeos descargables de cualquier página web.** Pegas el enlace y ya está.

- Una o varias calidades (2160p … 360p), mp4/mkv/webm/mov o **sólo el audio** (mp3, m4a, opus, wav, flac).
- Recorta un tramo (`1:30` → `2:10`), baja los subtítulos o una lista entera, o pega muchos enlaces para un **lote**.
- Vídeos con verificación de edad, privados o de Instagram: con la sesión de tu navegador o un `cookies.txt`.

### ✂️ Collage de papel en semitono
Tus fotos como recortes de papel en semitono que se montan solos en stop-motion, con un rótulo y música si quieres.
Semitono en todo, sólo en el fondo o en nada.

<p align="center">
  <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage-oso.gif" alt="Un collage hecho con CopyKat Studio" width="320">
</p>

### 🎨 51 estilos de cine
Risografía, ukiyo-e, RPG en pixel art de 16 bits, anime de los 80, cine mudo de los años 20, levantamiento LiDAR…
Cada estilo trae su paleta, sus letras, su etalonaje, sus transiciones y su movimiento. Úsalo para crear o para un
collage. (Adaptados de Lemo-Opuscar, MIT.)

### 🤖 Tu propia IA
Usa lo que ya pagas: con una suscripción no hay gastos de API.

| Opción | Cómo |
|---|---|
| **ChatGPT Plus / Pro** | Con Codex, el programa oficial de OpenAI. Un clic: CopyKat lo instala y tú inicias sesión. |
| **Claude Pro / Max** | Con Claude Code: tu sesión de siempre o un token de `claude setup-token`. |
| **Clave de API** | OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, cualquier servicio compatible con OpenAI u **Ollama** en tu ordenador. |

Sin IA, CopyKat sólo copia el ritmo, la duración y los cortes (ni textos, ni colores, ni maquetación), y te lo dice.
Para descargar y para los collages no hace falta IA.

### 🔒 Privado
El estudio funciona en tu ordenador, en `http://127.0.0.1:8080`, sólo para ti. Tus claves se quedan en `~/.copykat`
(sólo las lee tu usuario) y los archivos se borran al descargarlos o a los 60 minutos. Cada trabajo guarda un
registro que abres desde su tarjeta: si algo falla, ves por qué. En español, inglés y francés.

## Capturas

| Descargar | Mi IA |
|---|---|
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/download.png" alt="Descargar vídeos" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/my-ai.png" alt="Elige tu IA" width="420"> |
| **Collage** | **Estilos** |
| <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/collage.png" alt="Collage" width="420"> | <img src="https://raw.githubusercontent.com/PaulVentseck-lib/copykat-studio/main/docs/screenshots/styles.png" alt="51 estilos de cine" width="420"> |

## Instalar

**Windows:** descarga `CopyKat-Studio-…-Setup.exe` de la [última versión](https://github.com/PaulVentseck-lib/copykat-studio/releases/latest), ejecútalo y abre
**CopyKat Studio** desde el menú Inicio o el escritorio. Lleva todo dentro (Python, ffmpeg y Node): no hay que
instalar nada más. Windows puede avisar de que la aplicación es desconocida: pulsa «Más información» → «Ejecutar de
todas formas».

**Cualquier sistema** (Windows, macOS, Linux):

Necesitas **Python 3.10–3.13** y **ffmpeg**. Para `npx` (y el motor HyperFrames), también **Node 18+**.

```bash
# Lo más fácil: la primera vez lo instala todo y abre el estudio
npx copykat-studio

# O sólo con Python
pipx install "copykat-studio[all]"
copykat studio
```

ffmpeg: `winget install ffmpeg` (Windows) · `brew install ffmpeg` (macOS) · `sudo apt install ffmpeg` (Linux).

El lanzador de npm instala CopyKat en su propio entorno (`~/.copykat/venv`), sin tocar el Python de tu sistema, y lo
actualiza cuando sale una versión nueva. Hay paquetes listos para Windows (x64), macOS (Intel y Apple Silicon) y
Linux (x86_64).

## Línea de órdenes

```bash
copykat download "https://youtu.be/…" -q 1080 720           # un archivo por calidad
copykat download "https://youtu.be/…" --audio-only           # sólo el mp3
copykat download --lista enlaces.txt -q best                  # un lote, un enlace por línea
copykat download "https://youtu.be/…" --from 1:30 --to 2:10 --cookies-from-browser firefox
copykat collage foto1.jpg foto2.jpg --label "Recién hecho" --format story -o collage.mp4
copykat --help
```

También trae un servidor MCP (`copykat-mcp`) para que un asistente de IA analice referencias y haga piezas por ti.

## Preguntas

**YouTube me pide confirmar la edad.** Abre «Vídeos con verificación de edad, privados o de Instagram: usar mi sesión» y
elige un navegador donde tengas la sesión iniciada, o sube un `cookies.txt`. En Windows, Chrome y Edge cifran su
sesión: usa Firefox, o exporta `cookies.txt` con la extensión «Get cookies.txt LOCALLY».

**El resultado no se parece a la referencia.** Mira que arriba diga que tu IA está conectada (no «ninguno»), deja
«Revisar» marcado y prueba el motor directora de arte.

**Algo ha fallado.** Abre el registro del trabajo desde su tarjeta, o la carpeta `logs` que aparece abajo del estudio.

## Licencia

[Elastic License 2.0](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/LICENSE). Gratis para ti y para tu
negocio. **Ofrecerlo a terceros como servicio alojado o gestionado (SaaS) requiere una licencia comercial.** Las
partes de terceros mantienen sus licencias (MIT, OFL): ver
[NOTICE](https://github.com/PaulVentseck-lib/copykat-studio/blob/main/NOTICE). Oso, el gato, es de la oficina en pixel
art de usepaul y no entra en la licencia.

Descarga sólo lo que tengas derecho a usar y respeta las condiciones de cada sitio.

---

<p align="center"><sub>Hecho por PaulVentseck / usepaul · Oso dice miau 🐾</sub></p>
