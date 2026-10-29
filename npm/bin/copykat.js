#!/usr/bin/env node
// copykat desde npm: `npx copykat-studio` abre el estudio en tu ordenador, y `copykat <orden>` hace lo mismo
// que el copykat de Python (descargar, analizar, collage…).
//
// copykat está escrito en Python. Este lanzador lo instala la primera vez en su propio entorno
// (~/.copykat/venv, no toca el Python del sistema) y luego sólo lo arranca. Necesita Python 3.10+ y ffmpeg.
'use strict';
const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const VERSION = require('../package.json').version;
const WIN = process.platform === 'win32';
const CASA = process.env.COPYKAT_HOME || path.join(os.homedir(), '.copykat');
// Desde el repositorio clonado (desarrollo): tu código. Publicado en npm: el paquete compilado de PyPI para tu
// sistema (copykat-studio, sin código fuente), de la misma versión que este lanzador.
const REPO = path.join(__dirname, '..', '..');
const DESDE_REPO = fs.existsSync(path.join(REPO, 'pyproject.toml')) && fs.existsSync(path.join(REPO, 'copykat'));
// Cada una en su entorno, para que no se pisen al alternar entre la publicada y la del repositorio
const VENV = path.join(CASA, DESDE_REPO ? 'venv-repo' : 'venv');
const PY_VENV = WIN ? path.join(VENV, 'Scripts', 'python.exe') : path.join(VENV, 'bin', 'python');
const MARCA = path.join(VENV, '.copykat-version');

function fuente() {
  return DESDE_REPO ? REPO : null;
}

function paquete() {
  return DESDE_REPO ? `${REPO}[all]` : `copykat-studio[all]==${VERSION}`;
}

function corre(cmd, args, opciones = {}) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', ...opciones });
  return r.status === 0;
}

function buscarPython() {
  const candidatos = [process.env.COPYKAT_PYTHON, 'python3', 'python', WIN ? 'py' : null].filter(Boolean);
  for (const cmd of candidatos) {
    const extra = cmd === 'py' ? ['-3'] : [];
    const r = spawnSync(cmd, [...extra, '-c', 'import sys; print("%d.%d" % sys.version_info[:2])'], { encoding: 'utf8' });
    if (r.status !== 0) continue;
    const [mayor, menor] = r.stdout.trim().split('.').map(Number);
    if (mayor === 3 && menor >= 10) return [cmd, extra];
  }
  return null;
}

function instalar() {
  let instalada = '';
  try { instalada = fs.readFileSync(MARCA, 'utf8').trim(); } catch (e) { /* primera vez */ }
  if (instalada === VERSION && fs.existsSync(PY_VENV)) return;
  const python = buscarPython();
  if (!python) {
    console.error('copykat necesita Python 3.10 o más nuevo: https://www.python.org/downloads/\n' +
      '(o dime cuál usar con COPYKAT_PYTHON=/ruta/a/python)');
    process.exit(1);
  }
  console.log(instalada ? `Actualizando CopyKat Studio by Oso a ${VERSION}…` : `Instalando CopyKat Studio by Oso ${VERSION} en ${VENV} (sólo la primera vez)…`);
  fs.mkdirSync(CASA, { recursive: true });
  if (!fs.existsSync(PY_VENV) && !corre(python[0], [...python[1], '-m', 'venv', VENV])) {
    console.error('No he podido crear el entorno de Python (en Debian/Ubuntu: sudo apt install python3-venv).');
    process.exit(1);
  }
  const ok = corre(PY_VENV, ['-m', 'pip', 'install', '--quiet', '--upgrade', 'pip']) &&
    corre(PY_VENV, ['-m', 'pip', 'install', '--quiet', '--upgrade', ...(process.env.COPYKAT_PIP_ARGS || '').split(' ').filter(Boolean), paquete()]);
  if (!ok) {
    console.error('La instalación ha fallado. Vuelve a probar; si sigue, borra ' + VENV + ' y empieza de cero.');
    process.exit(1);
  }
  fs.writeFileSync(MARCA, VERSION);
}

function avisarFfmpeg() {
  const r = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' });
  if (r.status === 0) return;
  const como = process.platform === 'darwin' ? 'brew install ffmpeg'
    : WIN ? 'winget install ffmpeg' : 'sudo apt install ffmpeg';
  console.warn(`Aviso: falta ffmpeg (hace falta para vídeo y audio). Instálalo con: ${como}`);
}

instalar();
avisarFfmpeg();
const args = process.argv.slice(2);
// Sin nada, o al llamarlo `copykat-studio`: el estudio web, sólo para ti, en este ordenador.
const comoEstudio = args.length === 0 || (path.basename(process.argv[1]).startsWith('copykat-studio') && args[0]?.startsWith('-'));
const final = comoEstudio ? ['studio', ...args] : args;
// La carpeta del proyecto: si se lanza desde el repositorio clonado, ahí (temporal/ y logs/); si no, ~/copykat.
const carpeta = process.env.COPYKAT_CARPETA || (DESDE_REPO ? REPO : path.join(os.homedir(), 'copykat'));
const hijo = spawn(PY_VENV, ['-m', 'copykat', ...final], { stdio: 'inherit', env: { ...process.env, COPYKAT_CARPETA: carpeta } });
for (const senal of ['SIGINT', 'SIGTERM']) process.on(senal, () => hijo.kill(senal));
hijo.on('exit', (codigo) => process.exit(codigo ?? 0));
