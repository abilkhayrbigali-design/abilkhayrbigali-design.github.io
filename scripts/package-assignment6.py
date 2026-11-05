"""Package the complete frontend and Assignment 6 evidence, excluding older submissions."""
from pathlib import Path
import hashlib,json,zipfile
ROOT=Path(__file__).resolve().parents[1]
files=set(ROOT.glob('*.html'))
for name in ['README.md','IMAGE_SOURCES.md','package.json','script.js','.nojekyll','package-lock.json']:
    if (ROOT/name).is_file():files.add(ROOT/name)
for folder in ['css','js','images','audio','vendor','tests','scripts','report/assignment6']:
    files.update(p for p in (ROOT/folder).rglob('*') if p.is_file() and '__pycache__' not in p.parts)
files.add(ROOT/'output/pdf/Assignment_6_Report.pdf')
manifest=ROOT/'report/assignment6/submission-manifest.json'
files.discard(manifest)
manifest.write_text(json.dumps({'date':'2026-11-05','files':{str(p.relative_to(ROOT)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(files)}},indent=2)+'\n')
files.add(manifest)
archive=ROOT/'output/Assignment_6_Project.zip'
with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(files):z.write(p,Path('Assignment_6_Project')/p.relative_to(ROOT))
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for p in files:
        assert z.read(str(Path('Assignment_6_Project')/p.relative_to(ROOT)))==p.read_bytes()
print(f'Packaged and verified {len(files)} files: {archive} ({archive.stat().st_size/1024/1024:.1f} MB)')
