# Jiang Group Website — Update Instructions for Claude

This document describes how to instruct Claude to make updates to the Jiang Group website.
The website is a Next.js static site deployed to GitHub Pages. All content is stored in JSON
files under the `data/` directory. Images go in `public/images/`.

---

## 1. Updating News (Home Page)

**How to ask Claude:**
> "Add a news item dated [YYYY-MM-DD] that says: [text]. [Optionally: include this image: /images/news/filename.jpg]"

**What Claude will do:**
- Add a new object to `data/news.json` with a unique id, date, text, and optional image path.
- News older than 3 years is automatically collapsed under "Show archived news" — no action needed.

**JSON schema for a news item:**
```json
{
  "id": "news-NNN",
  "date": "YYYY-MM-DD",
  "text": "Your news text here.",
  "image": null
}
```

---

## 2. Updating the People Page

### 2.1 Adding a New Member

**How to ask Claude:**
> "Add a new [POSTDOCTORAL SCHOLAR / PhD STUDENT / MASTER'S STUDENT / UNDERGRADUATE STUDENT / HIGH SCHOOL STUDENT] named [Name]. Their email is [email]. [For postdocs/PhD: bio paragraph]. [For master's/undergrad: department]. [For high school: school name]. Their photo is at [/images/members/filename.jpg]."

**What Claude will do:**
- Add the member to the correct array in `data/members.json`.
- For POSTDOCTORAL SCHOLARS and Ph.D. STUDENTS: stores name, email, photo, bio.
- For MASTER'S and UNDERGRADUATE STUDENTS: stores name, department, email, photo.
- For HIGH SCHOOL STUDENTS: stores name, school, photo.

### 2.2 Updating an Existing Member

**How to ask Claude:**
> "Update [Name]'s [field] to [new value] in the People page."

### 2.3 Removing an Existing Member

**How to ask Claude:**
> "Remove [Name] from the People page."

**What Claude will do:**
- Delete the member's entry from `data/members.json`.

### 2.4 Moving a Member to Alumni

**How to ask Claude:**
> "Move [Name] to Alumni. They were in the group from [beginYear] to [exitYear]. Their current position is [optional: current job]."

**What Claude will do:**
- Remove the member from `data/members.json`.
- Add them to `data/alumni.json` with `beginYear`, `exitYear`, and optional `currentPosition`.
- Alumni are automatically sorted by `exitYear` (newest first).

---

## 3. Updating Research

**How to ask Claude:**
> "Add a new research project titled [Title]. Description: [paragraph]. The research image is at [/images/research/filename.jpg] and the carousel image is at [/images/research/filename-carousel.jpg]."

**What Claude will do:**
- Add the project to `data/research.json`.
- The new project will automatically appear as a carousel slide on the Home page with a "Read More" button, and as a section on the Research page.

**JSON schema for a research project:**
```json
{
  "id": "project-slug",
  "title": "Project Title",
  "description": "Full description paragraph.",
  "image": "/images/research/image.jpg",
  "carouselImage": "/images/research/carousel-image.jpg"
}
```

To update or remove a research project, ask Claude similarly.

---

## 4. Updating Publications

**How to ask Claude:**
> "Add this publication to the Publications page: [title], [authors], [journal], [year], [volume], [pages], [DOI], [link]."

Or:
> "I see new publications on Google Scholar. Please check and ask me if I want to update."

**What Claude will do:**
- Add the publication to `data/publications.json`.
- Publications are automatically grouped and sorted by year (newest first).

**JSON schema for a publication:**
```json
{
  "id": "pub-NNN",
  "title": "Paper title",
  "authors": "A. Author, B. Author, ...",
  "journal": "Journal Name",
  "year": 2025,
  "volume": "10",
  "pages": "1234-1240",
  "doi": "10.XXXX/XXXXXX",
  "link": "https://doi.org/10.XXXX/XXXXXX"
}
```

---

## 5. Updating Photos

**How to ask Claude:**
> "Add a photo from [Month YYYY] with the caption '[short event description]'. The image is at [/images/photos/filename.jpg]."

**What Claude will do:**
- Add the photo entry to `data/photos.json`.
- Photos are automatically displayed newest-first.

**JSON schema for a photo:**
```json
{
  "id": "photo-NNN",
  "monthYear": "YYYY-MM",
  "caption": "Short event description",
  "image": "/images/photos/filename.jpg"
}
```

---

## Developer Workflow

### Running locally
```bash
npm run dev        # Start dev server at http://localhost:3000
npm test           # Run all tests
npm run build      # Build static site to ./out
```

### Deploying
Push to the `main` branch. GitHub Actions will:
1. Run all tests.
2. Build the static site.
3. Deploy to GitHub Pages automatically.

### Adding images
Place image files in the appropriate subfolder under `public/images/`:
- `public/images/members/` — member and alumni photos
- `public/images/research/` — research project images
- `public/images/news/` — news item images
- `public/images/photos/` — lab photo gallery images

Then reference them in JSON as `/images/subfolder/filename.jpg`.

### Version history
Each update is committed to Git with a descriptive message summarizing the change.
