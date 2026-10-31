# Little Lemon Restaurant

A React 18 + Vite + Tailwind restaurant website (Meta Front-End Developer capstone). It uses Formik and Yup for the booking form.

- Package manager: pnpm. Do not use npm or yarn.
- Tests: `pnpm test` (Vitest unit tests), `pnpm test:ui` (Cypress e2e, needs `pnpm build` and `pnpm preview` first).
- Commit messages must start with a gitmoji emoji. Commitlint rejects other messages. The allowed list is in `.commitlintrc.cjs`.
- Commit message style: gitmoji, a space, then a short English imperative title. Use a capital first letter. Do not add a final period. Do not add a body. Make one commit for one change. Examples: `📝 Update README`, `👷 Fix CI issue`, `⬆️ Update dependencies`.

## Working Rules

- Prefer ASD-STE100 Simplified Technical English for documentation, UI copy, comments, commit messages, and user-facing technical communication where practical.
- Before adding complexity for a speculative or vanishingly unlikely race or security edge case, explain the concrete failure mode, likelihood, and complexity cost to the user and get their buy-in. Do not silently expand scope for theoretical robustness.
