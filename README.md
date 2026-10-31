# SpinJozi

Single-page marketing website for a Johannesburg-based 360° photo/video booth rental business. It is intentionally simple: clear packages, event information, and a WhatsApp-led quote flow.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Environment variable

Set `NEXT_PUBLIC_SITE_URL` to the final public URL (for example, `https://your-domain.co.za`) in Vercel before launch. It makes Open Graph and Twitter image URLs resolve correctly in social previews. Local development safely falls back to `http://localhost:3000`.

## Make it launch-ready

All key business content lives in [`config/site.ts`](config/site.ts):

- WhatsApp is configured as `27816947953`, which opens the correct South African `wa.me` link for `081 694 7953`.
- The phone number, `spinjozi@yahoo.com`, Instagram, and TikTok are configured in the site.
- Update the `packages` array to change prices or package wording.
- Confirm or remove any inclusions marked `confirmed: false` before promising them to customers.
- Update service areas, FAQs, and event wording in the same file.

## Replace images

All supplied JPG and MP4 media lives in `public/images` and `public/videos`. See [`public/images/README.md`](public/images/README.md) for the complete asset manifest. Media paths, alt text, and dimensions are centralized in `config/site.ts`; do not put paths directly in components.

## Logo options awaiting approval

Three standalone, unintegrated SVG concepts are in `public/logo-options`: option A (spinning lens), option B (Jozi skyline), and option C (SJ monogram). The website deliberately continues to use its existing wordmark until an option is chosen.

## Deploy to Vercel

Push this repository to your Git provider, import it at [vercel.com](https://vercel.com), and accept the detected Next.js settings. Add `NEXT_PUBLIC_SITE_URL` in the project’s environment variables, then add your custom domain in **Settings → Domains** and follow the displayed DNS records at your domain registrar.

## Activate contact-form email delivery

The form is implemented at `app/api/contact/route.ts` and delivers enquiries to `spinjozi@yahoo.com` through Resend. It is intentionally not described as live yet: a sender domain and API key are still required.

1. Create a Resend account and verify a domain SpinJozi controls.
2. Create a sending-only API key and add it to Vercel as `RESEND_API_KEY`.
3. Add `CONTACT_FROM_EMAIL` as an address at that verified domain, for example `SpinJozi <enquiries@yourdomain.co.za>`.
4. Add `CONTACT_TO_EMAIL=spinjozi@yahoo.com`.
5. Deploy, submit a real test enquiry, and confirm it arrives in Yahoo (including the spam folder).

The exact variable names are in `.env.example`. Credentials stay server-side and are never exposed in the browser. Until configured, the form will clearly tell visitors to use WhatsApp.
