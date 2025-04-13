# 🧪 TypeScript Sandbox (Docker + Vite + ESLint 9)

Tento repozitář obsahuje připravené prostředí pro školení a experimentování s **TypeScriptem**, 
postavené na vývojovém stacku uvnitř Docker containeru.

---

## ✅ Co obsahuje

- [x] Node.js 21 + TypeScript
- [x] Vite pro hot-reload vývoj
- [x] ESLint 9 + `eslint.config.mjs` (flat config)
- [x] Dvě oddělené pracovní složky: `sandbox/` a `work/`
- [x] Automatické lintování při spuštění sandboxu

---

## 🚀 Rychlý start

```bash
docker compose up -d
docker exec -it ts-sandbox bash
./sandbox/start.sh
```

> Po spuštění otevři prohlížeč:  
> 👉 http://localhost:12000

---

## 📁 Struktura projektu

```
.
├── docker/                   # Dockerfile pro sestavení vývojového prostředí
│   └── Dockerfile
├── docker-compose.yml        # Docker Compose definice pro spuštění kontejneru
├── README.md                 # Tento popis projektu
├── sandbox/                  # Výchozí prostředí pro experimenty
│   ├── entry.ts              # Hlavní vstupní bod aplikace
│   ├── eslint.config.mjs     # ESLint konfigurace (flat config pro verzi 9)
│   ├── index.html            # Vstupní html soubor pro sandbox
│   ├── package.json          # Závislosti sandboxu
│   ├── package-lock.json     # Zámek závislostí sandboxu
│   ├── src/                  # Zdrojové soubory aplikace (třídy, moduly…)
│   ├── start.sh              # Spouštěcí skript
│   ├── tsconfig.json         # TypeScript konfigurace
│   └── vite.config.ts        # Konfigurace Vite bundleru
└── work/                     # Prázdná složka pro vlastní projekt účastníků
```

---

## 🔧 Složka `sandbox/`

Slouží jako připravené výukové prostředí pro TypeScript s hotovým setupem:

- `entry.ts` – ukázkový TypeScript kód (vstupní bod)
- `src/` – složka pro třídy, pomocné moduly atd.
- `start.sh` – spustí Vite dev server
- `eslint.config.mjs` – plně funkční ESLint 9 konfigurace
- `vite.config.ts` – definice aliasů a portů
- Vše je připraveno tak, aby účastník **nemusel instalovat Node.js lokálně**

---

## 🧑‍💻 Složka `work/`

Prostor pro druhou část školení – zde si účastníci:

- inicializují nový projekt (`npm init`, `npm create vite@latest`)
- vyzkouší si, jak se dělá projekt od nuly

---

## 📄 Licence

MIT
