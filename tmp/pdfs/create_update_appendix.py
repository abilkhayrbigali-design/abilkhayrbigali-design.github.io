from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(r"C:\Users\Asus Vivo Book\Desktop\Documents\WEB\Final\abilkhayrbigali-design.github.io")
SOURCE = Path(r"C:\Users\Asus Vivo Book\Downloads\Assignment_6_Report.pdf")
ADDENDUM = ROOT / "tmp" / "pdfs" / "assignment-6-update-pages.pdf"
OUTPUT = ROOT / "output" / "pdf" / "Assignment_6_Report_Updated.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

pdfmetrics.registerFont(TTFont("Segoe", r"C:\Windows\Fonts\segoeui.ttf"))
pdfmetrics.registerFont(TTFont("Segoe-Bold", r"C:\Windows\Fonts\segoeuib.ttf"))

NAVY = colors.HexColor("#172a3b")
INK = colors.HexColor("#243648")
MUTED = colors.HexColor("#60758a")
BLUE = colors.HexColor("#178ccc")
LIGHT_BLUE = colors.HexColor("#e8f4fb")
PANEL = colors.HexColor("#f3f7fa")
LINE = colors.HexColor("#cfdae3")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", fontName="Segoe-Bold", fontSize=8, leading=10, textColor=BLUE, spaceAfter=5))
styles.add(ParagraphStyle(name="TitleCustom", fontName="Segoe-Bold", fontSize=23, leading=27, textColor=INK, spaceAfter=8))
styles.add(ParagraphStyle(name="Subhead", fontName="Segoe-Bold", fontSize=12, leading=15, textColor=INK, spaceBefore=4, spaceAfter=6))
styles.add(ParagraphStyle(name="BodyCustom", fontName="Segoe", fontSize=9, leading=13, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="SmallCustom", fontName="Segoe", fontSize=7.7, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="CardTitle", fontName="Segoe-Bold", fontSize=10, leading=13, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="CardBody", fontName="Segoe", fontSize=8.3, leading=11.2, textColor=INK))
styles.add(ParagraphStyle(name="TableHead", fontName="Segoe-Bold", fontSize=8, leading=10, textColor=WHITE))
styles.add(ParagraphStyle(name="TableBody", fontName="Segoe", fontSize=8.1, leading=10.5, textColor=INK))
styles.add(ParagraphStyle(name="TableLink", fontName="Segoe", fontSize=7.8, leading=10.3, textColor=BLUE, wordWrap="CJK"))

def P(text, style="BodyCustom"):
    return Paragraph(text, styles[style])

def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 47, width, 47, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#8fd4fb"))
    canvas.setFont("Segoe-Bold", 8)
    canvas.drawString(42, height - 28, "STEAM GAME HUB")
    canvas.setFillColor(colors.HexColor("#c3d0db"))
    canvas.setFont("Segoe", 7.5)
    canvas.drawRightString(width - 42, height - 28, "PROJECT UPDATE / TEAM EGGS / SE-2507")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.6)
    canvas.line(42, 34, width - 42, 34)
    canvas.setFillColor(MUTED)
    canvas.setFont("Segoe", 7)
    canvas.drawString(42, 21, "Assignment 6 - jQuery | 10 November 2026 | Frontend only")
    canvas.drawRightString(width - 42, 21, str(14 + doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(
    str(ADDENDUM), pagesize=A4, leftMargin=42, rightMargin=42,
    topMargin=64, bottomMargin=47, title="Assignment 6 - Project Update",
    author="Team Eggs, SE-2507",
)
story = []

# Page 15: features added after the source report.
story += [
    P("PROJECT UPDATE / NOVEMBER 2026", "Kicker"),
    P("Updates since the original report", "TitleCustom"),
    P("The storefront now includes a persistent Kazakh, Russian and English language selector, dedicated pages for each catalogue game, and direct contact links for the project team. This addendum documents the changes made after the original 14-page report.", "BodyCustom"),
    Spacer(1, 5),
]

language_card = [
    P("Language selector", "CardTitle"),
    P("The header selector shows <b>KZ</b>, <b>RU</b> or <b>EN</b>. The selected language is remembered between pages, and the new game-detail content is available in all three languages.", "CardBody"),
    Spacer(1, 8),
]
selector = Table([["KZ", "RU", "EN"]], colWidths=[40, 40, 40], rowHeights=[27])
selector.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, 0), NAVY), ("TEXTCOLOR", (0, 0), (0, 0), WHITE),
    ("BACKGROUND", (1, 0), (-1, -1), WHITE), ("TEXTCOLOR", (1, 0), (-1, -1), INK),
    ("BOX", (0, 0), (-1, -1), .7, LINE), ("INNERGRID", (0, 0), (-1, -1), .7, LINE),
    ("FONTNAME", (0, 0), (-1, -1), "Segoe-Bold"), ("FONTSIZE", (0, 0), (-1, -1), 8),
    ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
]))
language_card.append(selector)

button_card = [
    P("Game card action", "CardTitle"),
    P("Every game card links to its own detail page. The link opens in a new browser tab and keeps the original store page ready to return to.", "CardBody"),
    Spacer(1, 8),
]
sample_button = Table([[P("More details", "TableHead")]], colWidths=[104], rowHeights=[27])
sample_button.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), BLUE), ("BOX", (0, 0), (-1, -1), .5, BLUE),
    ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
]))
button_card.append(sample_button)

cards = Table([[language_card, "", button_card]], colWidths=[244, 14, 244])
cards.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, 0), PANEL), ("BACKGROUND", (2, 0), (2, 0), PANEL),
    ("BOX", (0, 0), (0, 0), .6, LINE), ("BOX", (2, 0), (2, 0), .6, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ("TOPPADDING", (0, 0), (-1, -1), 11), ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
]))
story += [cards, Spacer(1, 16), P("Game detail page", "Subhead")]
story += [P("Each page presents the game cover, a localized overview, genre, catalogue price and gameplay highlights. A gallery sits below the details and uses local screenshots where the project has them; when no screenshot is available, the gallery clearly shows the game cover instead.", "BodyCustom")]
story += [Spacer(1, 5)]

gallery_paths = [
    (ROOT / "images" / "games" / "counter-strike-2-screenshot.jpg", "Counter-Strike 2"),
    (ROOT / "images" / "games" / "cyberpunk-2077-screenshot.jpg", "Cyberpunk 2077"),
    (ROOT / "images" / "games" / "elden-ring-screenshot.jpg", "Elden Ring"),
]
gallery_cells = []
for image_path, caption in gallery_paths:
    if image_path.exists():
        pic = Image(str(image_path), width=158, height=74, kind="proportional")
        gallery_cells.append([pic, P(caption, "SmallCustom")])
    else:
        gallery_cells.append([P("Image unavailable", "SmallCustom")])
gallery = Table([gallery_cells], colWidths=[164, 164, 164])
gallery.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), PANEL), ("BOX", (0, 0), (-1, -1), .6, LINE),
    ("INNERGRID", (0, 0), (-1, -1), .6, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("LEFTPADDING", (0, 0), (-1, -1), 3),
    ("RIGHTPADDING", (0, 0), (-1, -1), 3), ("TOPPADDING", (0, 0), (-1, -1), 7),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
]))
story += [gallery, Spacer(1, 7), P("Local gameplay screenshots included in the detail-page galleries.", "SmallCustom")]

story.append(PageBreak())

# Page 16: the requested contact links and an update check.
story += [
    P("TEAM CONTACTS", "Kicker"),
    P("Meet the developers", "TitleCustom"),
    P("The About page now lists a direct email address and Telegram link for every team member. The same public contact details are included here for the project handoff.", "BodyCustom"),
    Spacer(1, 10),
]

rows = [[P("Developer", "TableHead"), P("Email", "TableHead"), P("Telegram", "TableHead")]]
contacts = [
    ("Nursultan Tashkenbayev", "frozyness@gmail.com", "Lu_niX"),
    ("Abulkhair Bigali", "Abilkhayrbigali@gmail.com", "Abilkhayrbigalib"),
    ("Shyngys Sultankulov", "sultankulovce@gmail.com", "didok24"),
    ("Artem Lopatkin", "artem.lopatkin.321@gmail.com", "shishechki420"),
]
for name, email, telegram in contacts:
    rows.append([
        P(name, "TableBody"),
        P(f'<link href="mailto:{email}" color="#178ccc">{email}</link>', "TableLink"),
        P(f'<link href="https://t.me/{telegram}" color="#178ccc">@{telegram}</link>', "TableLink"),
    ])
contact_table = Table(rows, colWidths=[158, 205, 129], repeatRows=1)
contact_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), NAVY), ("BACKGROUND", (0, 1), (-1, -1), WHITE),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PANEL]), ("GRID", (0, 0), (-1, -1), .55, LINE),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 9),
    ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 11),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
]))
story += [contact_table, Spacer(1, 19), P("Update summary", "Subhead")]
summary = [
    [P("Languages", "CardTitle"), P("Site selector for KZ, RU and EN; the selected language is stored locally and reused on each page.", "CardBody")],
    [P("Game pages", "CardTitle"), P("A new detail page is available for all nine catalogue games, with translated overviews, genre, price and image gallery.", "CardBody")],
    [P("Team contacts", "CardTitle"), P("Email and Telegram links are shown on the About page and in this update appendix.", "CardBody")],
]
summary_table = Table(summary, colWidths=[105, 387])
summary_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, -1), LIGHT_BLUE), ("BACKGROUND", (1, 0), (1, -1), PANEL),
    ("GRID", (0, 0), (-1, -1), .5, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
]))
story += [summary_table, Spacer(1, 14), P("Update check", "Subhead")]
story += [P("The JavaScript files changed for this update pass syntax checks, the patch passes the whitespace check, and the referenced local gallery images are present. The 57/57 browser-check result on page 14 belongs to the original report and was not repeated for this addendum.", "BodyCustom")]

doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)

source_reader = PdfReader(str(SOURCE))
appendix_reader = PdfReader(str(ADDENDUM))
writer = PdfWriter()
writer.append(str(SOURCE))
writer.append(str(ADDENDUM))
writer.add_metadata({
    "/Title": "Assignment 6 - jQuery Game Store - Updated",
    "/Author": "Team Eggs, SE-2507",
    "/Subject": "Original project report with November 2026 feature update appendix",
})
with OUTPUT.open("wb") as stream:
    writer.write(stream)

if len(source_reader.pages) != 14 or len(appendix_reader.pages) != 2:
    raise RuntimeError(f"Unexpected page counts: source={len(source_reader.pages)}, appendix={len(appendix_reader.pages)}")
if len(PdfReader(str(OUTPUT)).pages) != 16:
    raise RuntimeError("The updated report did not contain the expected 16 pages.")
print(f"Created {OUTPUT} (16 pages; original 14 pages preserved and 2 update pages appended).")
