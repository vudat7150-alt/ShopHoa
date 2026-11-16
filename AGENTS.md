<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Homepage seasonal products and scent discovery use a shared typed configuration so catalogue query filters and future theme editing share one source of truth.
- The fresh-arrival rail uses existing catalogue products selected in the homepage configuration, not invented inventory or arrival dates; scrolling stays native for touch and keyboard access.
- The seasonal ticker uses the shared season-end calculation, not an invented offer deadline; sales-count claims require verified data.
- Occasion reminders use a validated public write-only server function and a rate-limited database RPC; no visitor reads or login are needed. Email delivery stays explicitly inactive until a sender domain is verified.
- Seasonal showcase is a compact framed shelf with one complete generated tree per season hugging the right edge (crossfaded, swaying from the root as a whole, never pieced from separate branch images); sparse leaves fade before products and bookmarks protrude outside. Pause offscreen/hidden and respect reduced motion; no background video.
- Handcrafted stationery uses a shared material catalogue and cancellable sequential Motion controls with a clipped card between the back and front pocket, flat scaleY flap folds, and a separate live writing preview; avoid perspective so the envelope stays flat-lay, and honor reduced motion.
- Policy and support content lives in a shared typed catalogue rendered by a shared sidebar/article view; each topic has its own leaf route and metadata so footer navigation and direct links stay consistent.
- Shop groups, proposed items, price tiers and contextual attributes live in one typed catalogue; category pages share filtering and cards, with shop pop-out limited to bouquets and arrangements. Keep legacy species/scent query links functional through the hub's filtered view.
- Product variants are resolved centrally into distinct cart IDs and prices; dictionary recommendations use the shared catalogue's primary focal species, with explicit exceptions for misclassified legacy items, so supporting blooms never leak into recommendations.
- Dictionary color varieties keep bouquet images and meanings together in a typed catalogue; editorial-only imagery never creates inventory or changes prices.
- Homepage dictionary and featured dictionary imagery share FlowerFrame and the color-note catalogue so framing and pointer tilt stay synchronized, with motion disabled for touch and reduced-motion preferences.
- Delivery moments use a typed photo/video catalogue and native scrolling; videos pause offscreen, hidden or behind the lightbox to avoid unnecessary decoding. Captions describe supplied media without invented delivery locations.

- Portable exports import real media directly from src/assets; do not restore CDN pointer imports, so the exported app can serve those files independently of Lovable asset hosting.
