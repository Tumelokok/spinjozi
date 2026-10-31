# SpinJozi media assets

All paths, alt text, and display dimensions are maintained in [`config/site.ts`](../../config/site.ts). Do not put media paths directly in components.

Image dimensions and file sizes below were checked from the files in `public/`. The MP4 files' file sizes are recorded; their intrinsic dimensions are not required by the responsive video layout.

| Filename | Type | Source size | Used in | AI-generated |
| --- | --- | --- | --- | --- |
| `hero-booth.jpg` | Image | 1448 × 1086; 2.35 MB | Hero video poster and static/reduced-motion fallback | Yes — illustrative |
| `booth-closeup.jpg` | Image | 1254 × 1254; 1.93 MB | “What’s included” feature visual | Yes — illustrative |
| `event-wedding.jpg` | Image | 1448 × 1086; 2.31 MB | Weddings event card | Yes — illustrative |
| `event-birthday.jpg` | Image | 1086 × 1448; 2.45 MB | Birthdays event card | Yes — illustrative |
| `event-graduation.jpg` | Image | 1086 × 1448; 2.38 MB | Graduations event card | Yes — illustrative |
| `event-corporate.jpg` | Image | 1086 × 1448; 2.11 MB | Corporate Events event card | Yes — illustrative |
| `event-party.jpg` | Image | 1672 × 941; 2.08 MB | Private Parties event card | Yes — illustrative |
| `gallery-02.jpg` | Image | 1672 × 941; 2.09 MB | Gallery tile and gallery-video poster | Yes — illustrative |
| `gallery-03.jpg` | Image | 1671 × 941; 2.03 MB | Gallery tile | Yes — illustrative |
| `gallery-04.jpg` | Image | 1536 × 1024; 2.08 MB | Gallery tile | Yes — illustrative |
| `og-image.jpg` | Image | 1733 × 907; 1.74 MB | Open Graph and Twitter share card | Yes — illustrative |
| `hero-loop.mp4` | Video | 2.11 MB | Hero loop; video only autoplays when motion/data preferences permit | Yes — illustrative |
| `gallery-clip-01.mp4` | Video | 2.86 MB | Lazy-loaded gallery tile | Yes — illustrative |

The gallery is deliberately a four-tile layout: one clip and the three images listed above. Its nearby “Illustrative images” caption makes the nature of these visuals clear to visitors.

## Before publishing

Optimise the original files before deployment if possible. Use descriptive, consented photography when it is available; if an illustrative image is replaced, update its alt text and AI-generated status in this file and `config/site.ts`.
