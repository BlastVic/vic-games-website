"""Package only checked static output; never include source, sibling games or credentials."""
import hashlib, json, pathlib, zipfile
root = pathlib.Path(__file__).resolve().parents[1]
out = root / 'release'
out.mkdir(exist_ok=True)
files = sorted(p for p in (root / 'dist').rglob('*') if p.is_file())
allowed = {'.html', '.css', '.js', '.png', '.svg', '.webp', '.txt', '.xml'}
for p in files:
    if p.suffix not in allowed and p.name not in {'_headers', '_redirects'}:
        raise SystemExit(f'Unexpected public file: {p.name}')
archive = out / 'vic-games-website.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as z:
    for p in files:
        z.write(p, p.relative_to(root / 'dist').as_posix())
manifest = [{'file': p.relative_to(root / 'dist').as_posix(), 'bytes': p.stat().st_size, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in files]
(out / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'Packaged {len(files)} public files: {archive}')
print(f'SHA256: {hashlib.sha256(archive.read_bytes()).hexdigest()}')
