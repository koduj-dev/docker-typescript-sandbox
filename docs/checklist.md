## 🍏 macOS – Docker školení checklist

Pokud používáte macOS, ověřte si následující kroky před spuštěním školícího prostředí:

### ✅ Před spuštěním

- [ ] Mám nainstalovaný [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
- [ ] Otevřel(a) jsem si terminál (např. Terminal nebo iTerm2)
- [ ] Nacházím se ve složce se školícím projektem (např. `~/Documents/vue-training-base`)
- [ ] V této složce mám:
    - `docker-compose.yml`
    - složky `sandbox/` a `work/`

### ✅ První spuštění

- [ ] Spustil(a) jsem: `docker compose up -d`
- [ ] Docker požádal o přístup ke složce → **povolil(a) jsem ho**
- [ ] Zkontroloval(a) jsem, že kontejner běží pomocí `docker ps`
- [ ] Připojil(a) jsem se do containera: `docker exec -it typescript-training bash`

### ✅ Práce uvnitř containera

- [ ] Ve složce `/app/sandbox` vidím soubory `script.ts`, `tsconfig.json`, `build.sh`
- [ ] Funguje mi příkaz `tsc`, `node`, a `./build.sh`
- [ ] Ve složce `/app/work` mohu spustit `npm init`, `npm install`, `npm create vite`, apod.

> 💡 Pokud něco z výše uvedeného nefunguje, zkontrolujte přístupová oprávnění ve **Finder → Systémová nastavení → Zabezpečení → Soukromí → Soubory a složky → Docker Desktop**.