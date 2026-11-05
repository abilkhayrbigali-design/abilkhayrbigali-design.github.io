"""Build the Assignment 6 report from source excerpts and verified browser screenshots."""
from pathlib import Path
import json, textwrap
from PIL import Image, ImageDraw, ImageFont
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'report/assignment6'
PDF = ROOT / 'output/pdf/Assignment_6_Report.pdf'
FONT = '/usr/share/fonts/noto/NotoSans-Regular.ttf'
BOLD = '/usr/share/fonts/noto/NotoSans-Bold.ttf'
MONO = '/usr/share/fonts/noto/NotoSansMono-Regular.ttf'
pdfmetrics.registerFont(TTFont('Hub', FONT)); pdfmetrics.registerFont(TTFont('HubBold', BOLD))
W,H=595.28,841.89
INK=HexColor('#172b3e'); MUTED=HexColor('#50667a'); BLUE=HexColor('#1478b5')
styles={
    'body':ParagraphStyle('body',fontName='Hub',fontSize=9,leading=14,textColor=INK,spaceAfter=7),
    'small':ParagraphStyle('small',fontName='Hub',fontSize=8,leading=12,textColor=MUTED),
    'h2':ParagraphStyle('h2',fontName='HubBold',fontSize=13,leading=18,textColor=INK),
}
c=canvas.Canvas(str(PDF),pagesize=(W,H))
c.setTitle('Assignment 6 - jQuery Game Store | Team Eggs, SE-2507')
c.setAuthor('Team Eggs, SE-2507')
page=0

def para(text,y,style='body',x=40,width=W-80):
    p=Paragraph(text,styles[style]);_,height=p.wrap(width,H);p.drawOn(c,x,y-height);return y-height-7

def start(label,title):
    global page
    page+=1
    c.setFillColor(INK);c.rect(0,H-55,W,55,fill=1,stroke=0)
    c.setFillColor(HexColor('#77c5f0'));c.setFont('HubBold',9);c.drawString(40,H-23,'STEAM GAME HUB')
    c.setFillColor(HexColor('#c5d7e4'));c.setFont('Hub',8);c.drawRightString(W-40,H-23,'TEAM EGGS / SE-2507')
    c.setFillColor(BLUE);c.setFont('HubBold',8);c.drawString(40,H-78,label.upper())
    c.setFillColor(INK);c.setFont('HubBold',21);c.drawString(40,H-109,title)
    c.setStrokeColor(HexColor('#d8e2e9'));c.line(40,39,W-40,39)
    c.setFillColor(MUTED);c.setFont('Hub',7);c.drawString(40,25,'Assignment 6 - jQuery | 05 November 2026 | Frontend only')
    c.drawRightString(W-40,25,str(page))
    return H-128

def picture(file,y,caption,max_height=250):
    p=OUT/file
    with Image.open(p) as image: iw,ih=image.size
    scale=min((W-80)/iw,max_height/ih)
    width,height=iw*scale,ih*scale
    c.drawImage(str(p),40,y-height,width=width,height=height,mask='auto')
    return para(caption,y-height-6,'small')-7

def code_shot(slug,first,count=17):
    lines=(ROOT/'script.js').read_text().splitlines()
    index=next(i for i,line in enumerate(lines) if first in line)
    rows=[]
    for number,line in enumerate(lines[index:index+count],index+1):
        wraps=textwrap.wrap(line,width=104,replace_whitespace=False,drop_whitespace=False) or ['']
        for j,part in enumerate(wraps):rows.append((str(number) if j==0 else '',part))
    font=ImageFont.truetype(MONO,19)
    image=Image.new('RGB',(1360,76+len(rows)*29),'#142434');d=ImageDraw.Draw(image)
    d.rounded_rectangle((18,15,1342,52),6,fill='#254054')
    d.text((34,22),f'script.js  /  lines {index+1}-{index+count}',font=ImageFont.truetype(MONO,16),fill='#8ecbff')
    for i,(number,line) in enumerate(rows):
        d.text((23,66+i*29),number,font=font,fill='#7793ab')
        d.text((85,66+i*29),line,font=font,fill='#dceaf4')
    name='code-'+slug+'.png';image.save(OUT/name);return name

with Image.open(OUT/'store-1440.png') as image:
    image.crop((0,0,image.width,min(950,image.height))).save(OUT/'store-first-screen.png')
verification=json.loads((OUT/'verification.json').read_text())
passed=sum(x['passed'] for x in verification['results'])
y=start('Project report','Assignment 6. jQuery')
y=para('A game storefront with live discovery, player ratings, virtual purchases and returns.',y,'h2')
y=para('<b>Objective.</b> Use jQuery for DOM changes, events, animations and practical frontend interactions while continuing our existing team website.',y)
y=para('<b>Team:</b> Eggs<br/><b>Group:</b> SE-2507<br/><b>Members:</b> Ташкенбаев Нурсултан; Бигали Абулхаир; Султанкулов Шынгыс; Лопаткин Артем.',y)
y=para('<b>Stack:</b> HTML, CSS, Bootstrap 5.3.8, jQuery 4.0.0 and browser localStorage. No backend, real accounts, payment provider or server requests for purchases.',y)
y=picture('store-first-screen.png',y,'The redesigned desktop storefront. Full-resolution screenshots accompany this report.',max_height=285)
y=para('<b>Website:</b> <link href="https://abilkhayrbigali-design.github.io/" color="#1478b5">https://abilkhayrbigali-design.github.io/</link><br/><b>Repository:</b> <link href="https://github.com/abilkhayrbigali-design/abilkhayrbigali-design.github.io" color="#1478b5">github.com/abilkhayrbigali-design/abilkhayrbigali-design.github.io</link>',y)
y=para(f'<b>Verification:</b> {passed}/{len(verification["results"])} browser checks passed in Chromium {verification["browser"]}, including 10 pages at 375, 768 and 1440 px.',y)
c.showPage()

TASKS=[
('0','Setup and document ready','$(document).ready(function',8,'store-first-screen.png',
 '1. Include the official jQuery 4.0.0 CDN script in the HTML head, with a local fallback.<br/>2. Load the external script.js after the library and catalogue data.<br/>3. Wrap the implementation in $(document).ready() and log “jQuery is ready!” in the console.',
 'The store initializes with a $100 wallet, rendered rating controls and working navigation. The offline test also verifies that the local jQuery copy renders all 45 game-rating inputs.'),
('1','Real-time game filtering','const $matches = $cards.filter',16,'search-highlighting.png',
 '1. Bind input and change events to the search and filter fields.<br/>2. Use jQuery .filter() to combine the search text, genre, price and library ownership.<br/>3. Hide non-matching cards, update the count and display an empty state when needed.',
 'Typing CYBER leaves Cyberpunk 2077. RPG + Free to play produces an empty state. Reset filters restores all nine games. Searches ignore case and surrounding whitespace.'),
('2','Autocomplete suggestions','function showSuggestions()',20,'autocomplete.png',
 '1. Read the search-bar value on input and find up to five matching games.<br/>2. Build suggestions containing artwork, game name and price.<br/>3. Select with a click, or use Up/Down and Enter. Escape and losing focus close the list.',
 'A suggestion opens the matching catalogue result. The combobox exposes aria-expanded, aria-controls and aria-activedescendant for keyboard and assistive-technology users.'),
('3','Safe search highlighting','function highlighted(text, query)',9,'search-highlighting.png',
 '1. Escape regular-expression metacharacters in the search string.<br/>2. Split each displayed title, genre and description around every matching text segment.<br/>3. Escape the text as HTML, wrap matches in mark elements, and update the element through .html().',
 'Matching text is highlighted without changing the original game data. Inputs such as [, .* and HTML markup remain literal strings; clearing the query restores normal text.'),
('4','Scroll progress indicator','function updateScrollProgress()',8,'scroll-progress.png',
 '1. Add a fixed three-pixel progress track at the top of the viewport.<br/>2. On scroll and resize, divide scrollY by the available scroll distance.<br/>3. Update the coloured bar width and clamp it to the valid range.',
 'The blue-to-green gradient fills as the user scrolls and reaches 100% at the bottom. Short pages handle zero scroll distance without division by zero.'),
('5','Animated number counters','function animateCounters()',16,'animated-counters.png',
 '1. Store each target number in a data-counter attribute.<br/>2. Detect when the counter enters the viewport.<br/>3. Animate an object property with jQuery .animate(), update the text on each step and set the exact final value.',
 'The home page counts to 9 games, $100 starting balance, 2 free games and 6 genres. Each counter runs once. Reduced-motion settings display the final number immediately.'),
('6','Submit spinner and lock','$(\'#checkout-form\').on',15,'purchase-spinner.png',
 '1. Validate the purchase or return and show the amount before confirmation.<br/>2. On submit, disable the button, display a spinner and “Please wait…” and guard against duplicate submissions.<br/>3. After the simulated delay, re-check the current profile and balance, save the result and restore the controls.',
 'No actual server call occurs. The same feedback is added to the existing validated contact and subscription forms. Invalid forms show errors before any loading state.'),
('7','Temporary notifications','function toast(message',6,'purchase-toast.png',
 '1. Add an aria-live status area for notifications.<br/>2. Insert the action result with .text(), then animate .fadeIn().<br/>3. Wait with .delay(), run .fadeOut() and remove the finished toast.',
 'Notifications confirm purchases, refunds, ratings, profile changes, form submission and copying. Storage or transaction failures show an error notification instead of a false success.'),
('8','Copy to clipboard','$(\'[data-copy-link]\').on',21,'clipboard.png',
 '1. Read the share link and use navigator.clipboard.writeText() after the user clicks.<br/>2. Provide a textarea-based fallback for browsers without the Clipboard API.<br/>3. Show a checkmark, a “Copied to clipboard!” status and tooltip, then restore the button.',
 'The browser test checks the actual clipboard contents as well as the visible confirmation. If copying fails, the page asks the user to select the link manually.'),
('9','Lazy image loading','function loadVisibleImages()',11,'lazy-after.png',
 '1. Give off-screen images a small local SVG placeholder and store their real URL in data-src.<br/>2. On scroll, resize and filter changes, check visible images with jQuery .offset().<br/>3. Set .attr(“src”) only near the viewport, then remove data-src so the image is processed once.',
 'Lower catalogue images stay deferred until the user scrolls towards them. Images in hidden filter results or an empty library remain unloaded. Width and height keep card layout stable.'),
]
for num,title,first,count,shot,steps,result in TASKS:
    y=start('Task '+num,title)
    y=para(steps,y)
    y=para('<b>Result.</b> '+result,y)
    max_ui=245 if num not in ['5','8'] else (110 if num=='5' else 120)
    y=picture(shot,y,'Browser result: '+title+'.',max_height=max_ui)
    code=code_shot(num,first,count)
    y=picture(code,y,'Source excerpt from the external script.js (line numbers shown).',max_height=225)
    if y<47:raise RuntimeError(f'Task {num} overflows: {y}')
    c.showPage()

y=start('Additional requested features','Profiles, purchases and returns')
y=para('<b>Player profiles.</b> Use the player name in the header to create or switch a local profile. Each profile starts with 10,000 integer cents ($100), an empty library and independent ratings. Duplicate and blank names are rejected.',y)
y=para('<b>Purchases.</b> A confirmation dialog shows the game price, current funds and remaining balance. A successful purchase subtracts the exact number of cents and adds the game ID once. Already-owned games cannot be bought again, and insufficient funds disable confirmation.',y)
y=para('<b>Refresh behaviour.</b> As requested, an actual page reload refills every saved wallet to $100, detected using the navigation performance entry. Ordinary navigation preserves the current balance. Libraries and ratings survive refresh.',y)
y=para('<b>Returns.</b> Library → Return game removes ownership and adds the full virtual price. Returning a free game changes no funds. A purchase cannot be refunded twice. A refund after a refill may legitimately raise this demo wallet above $100.',y)
y=picture('profiles.png',y,'Independent local profiles and their wallet balances.',max_height=230)
y=picture('library-refund.png',y,'The library exposes a return action on each owned game.',max_height=190)
if y<47:raise RuntimeError('Extras page overflow')
c.showPage()

y=start('Community registration','One block, three steps')
y=para('1. Enter a unique player name and press Continue.<br/>2. Enter a valid email address. Back returns to the previous field without clearing it.<br/>3. Enter a demo password with at least eight characters and confirm it. Submit creates the local player profile and its $100 wallet.',y)
y=para('Only the current step is visible. The step indicator, validation messages and focused input update in place. Empty fields, invalid email, short or mismatched passwords and existing player names prevent advancement. Start over clears the form.',y)
y=picture('registration-email.png',y,'Community registration, step 2 of 3. The same block changes from name to email to password.',max_height=225)
y=picture(code_shot('registration','function showRegistrationStep(step',17),y,'The step controller switches panels, progress, buttons and focus.',max_height=210)
y=para('<b>Completion.</b> The submit spinner prevents duplicate profiles. A success panel confirms the active player and $100 wallet. Email and password are cleared and are never stored. Tests cover the whole flow at desktop and mobile widths.',y)
if y<47:raise RuntimeError('Registration page overflow')
c.showPage()

y=start('Verification and deployment','Checks, publication and reflection')
y=para(f'<b>Browser verification.</b> {passed}/{len(verification["results"])} checks passed. The suite covers combined filters, literal regex/HTML inputs, keyboard suggestions, persistent per-game ratings, one-time charges, insufficient funds, returns, independent profiles, reload refills, clipboard contents, counters, progress, lazy images and form loading feedback.',y)
y=para('<b>Responsive checks.</b> All ten pages were checked at 375, 768 and 1440 pixels. No horizontal page overflow, duplicate IDs, broken loaded images, JavaScript errors or backend submissions were detected in the checked scenarios. All local file and fragment links resolve.',y)
y=para('<b>How to reproduce.</b> Run npm install, then npm test with Chromium available (BROWSER_PATH selects another Chromium executable). The site itself needs no build or Node.js. Open index.html, or serve the directory with python3 -m http.server 8765. For consistent cross-page storage, use HTTP or GitHub Pages.',y)
deployment=OUT/'deployment-verification.json'
if deployment.exists():
 d=json.loads(deployment.read_text())
 y=para('<b>Deployment.</b> Changes were committed and pushed to the existing shared GitHub repository. GitHub Pages completed successfully. The deployed source was checked against local file hashes; details are in report/assignment6/deployment-verification.json.',y)
else:
 y=para('<b>Deployment.</b> Changes were committed and pushed to the shared repository to trigger its existing GitHub Pages workflow. Check report/assignment6/deployment-verification.json for the final publication status.',y)
y=para('<b>Live website:</b> <link href="https://abilkhayrbigali-design.github.io/" color="#1478b5">https://abilkhayrbigali-design.github.io/</link>',y)
y=para('<b>Challenges and solutions.</b> Browser storage must keep each player independent, so purchases and ratings are keyed by stable profile and game IDs. Money uses integer cents to avoid floating-point rounding. A reload differs from navigation, so only the reload path refills wallets. Search highlighting escapes both regex and HTML. Transactions re-read saved state before completion to guard against stale data from another tab.',y)
y=para('<b>Reflection.</b> jQuery simplifies selecting elements, reacting to input, updating DOM content and animating feedback. Browser-only state is enough for this academic demonstration; profiles are local data, not authenticated accounts. The same UI patterns can be explained and demonstrated without any backend.',y)
y=para('<b>Submission.</b> The ZIP contains the complete frontend, local assets and libraries, this PDF, the test suite and evidence. Each team member must submit both PDF and ZIP in LMS by its stated deadline and defend the implementation during the practice lesson.',y)
y=para('<b>Files to review:</b> script.js; js/games-data.js; css/store.css; tests/assignment6.cjs; report/assignment6/verification.json.',y,'small')
if y<47:raise RuntimeError('Final page overflow')
c.showPage();c.save();print(f'Created {PDF} ({page} pages)')
