# Freelance portfolio (Next.js 14)

## Run
```
npm install
npm run dev     # http://localhost:3000
npm run build   # production check
```

## Edit your content
Everything lives in `data/site.js`: contact, platforms (empty links hide), skills, services,
projects, FAQs, testimonials. Screenshots: put files in `public/projects/` and add
`image: "/projects/name.png"`. APK download: add `apk: "https://..."` to a project.
Resume: put `resume.pdf` in `public/` and set `resume: "/resume.pdf"`.

## Deploy free
Push to GitHub, import the repo on vercel.com, click Deploy.
