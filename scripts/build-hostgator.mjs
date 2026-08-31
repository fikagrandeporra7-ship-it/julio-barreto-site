import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(projectRoot, "dist", "public");
const packageDir = path.join(projectRoot, "dist", "hostgator");
const assetSourceDir = "/home/ubuntu/webdev-static-assets/julio-barreto-hostgator/assets";
const assetDir = path.join(packageDir, "assets");

const assets = [
  "julio-logo_54e754fb.webp",
  "numero-406.webp",
  "JulioBarreto_c742e036.webp",
  "julio-mark_b168c756.png",
];

if (!fs.existsSync(sourceDir)) {
  throw new Error(`A pasta ${sourceDir} não existe. Execute o Vite antes do empacotamento.`);
}

const assetAliases = {
  "julio-logo_54e754fb.webp": "julio-logo_54e754fb.webp",
  "numero-406_e5375f9c.webp": "numero-406.webp",
  "JulioBarreto_c742e036.webp": "JulioBarreto_c742e036.webp",
  "julio-mark_b168c756.png": "julio-mark_b168c756.png",
};

for (const asset of assets) {
  const sourceAsset = path.join(assetSourceDir, asset);
  if (!fs.existsSync(sourceAsset)) {
    throw new Error(`Imagem ausente: ${sourceAsset}`);
  }
}

fs.rmSync(packageDir, { recursive: true, force: true });
fs.mkdirSync(packageDir, { recursive: true });
fs.cpSync(sourceDir, packageDir, { recursive: true });
fs.rmSync(path.join(packageDir, "__manus__"), { recursive: true, force: true });
fs.mkdirSync(assetDir, { recursive: true });

for (const asset of assets) {
  fs.copyFileSync(path.join(assetSourceDir, asset), path.join(assetDir, asset));
}

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  });
}

const replaceableFiles = listFiles(packageDir).filter((file) => /\.(html|css|js)$/.test(file));
for (const file of replaceableFiles) {
  let content = fs.readFileSync(file, "utf8");
  for (const [storageAsset, localAsset] of Object.entries(assetAliases)) {
    content = content.replaceAll(`/manus-storage/${storageAsset}`, `/assets/${localAsset}`);
  }
  content = content.replace(/\s*<script[^>]+src="https:\/\/manus-analytics\.com\/umami"[^>]*><\/script>/g, "");
  content = content.replace(/<script\b[^>]*\bumami\b[^>]*><\/script>/g, "");
  content = content.replace(/<script\b[^>]*\/__manus__\/debug-collector\.js[^>]*><\/script>/g, "");
  fs.writeFileSync(file, content);
}

fs.writeFileSync(
  path.join(packageDir, ".htaccess"),
  `# Júlio Barreto — configuração para Apache/cPanel (HostGator)\n` +
    `Options -Indexes\n` +
    `DirectoryIndex index.html\n` +
    `\n` +
    `# Mantém as rotas internas da aplicação funcionando ao atualizar a página.\n` +
    `<IfModule mod_rewrite.c>\n` +
    `  RewriteEngine On\n` +
    `  RewriteBase /\n` +
    `  RewriteCond %{REQUEST_FILENAME} !-f\n` +
    `  RewriteCond %{REQUEST_FILENAME} !-d\n` +
    `  RewriteRule ^ index.html [L]\n` +
    `</IfModule>\n`,
);

fs.writeFileSync(
  path.join(packageDir, "LEIA-ME.txt"),
  `JÚLIO BARRETO — PACOTE HOSTGATOR\n\n` +
    `1. Abra o Gerenciador de Arquivos da HostGator e entre em public_html (ou na pasta do domínio).\n` +
    `2. Envie o conteúdo desta pasta, incluindo o arquivo oculto .htaccess.\n` +
    `3. Se o domínio já tiver um index.html antigo, substitua-o pelo deste pacote.\n` +
    `4. Acesse o domínio e teste a navegação e o menu mobile.\n\n` +
    `O pacote é frontend estático: não requer Node.js, banco de dados ou configuração de servidor.\n` +
    `O formulário e os links sociais atuais permanecem como elementos demonstrativos até que os\n` +
    `endereços oficiais do mandato sejam conectados.\n`,
);

console.log(`Pacote HostGator criado em ${packageDir}`);
console.log(`Arquivos estáticos: ${listFiles(packageDir).length}`);
