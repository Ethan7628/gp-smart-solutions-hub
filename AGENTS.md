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

- Keep enquiry intent in optional validated contact search parameters and derive form defaults through a shared browser-safe helper so survey, equipment and area links remain consistent.
- Keep existing equipment URLs as catalogue pages; installation scopes belong on the separate service routes so published links remain valid.
- Production media must be bundled local files in src/assets (not .asset.json pointers): the custom domain is hosted outside Lovable and cannot serve /__l5e/ URLs.
