# Frontier Moto Adventure

Private, invitation-only self-guided motorcycle adventure rides across Europe.

## Deployment to GitHub Pages

To deploy this website to GitHub Pages, follow these steps:

1.  **Export to GitHub:** Use the **Settings** (⚙️) -> **Export to GitHub** feature in AI Studio.
2.  **Enable GitHub Pages:**
    *   Go to your repository on GitHub.
    *   Click on **Settings** -> **Pages**.
    *   Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3.  **Trigger Deployment:**
    *   The included GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy your site whenever you push to the `main` branch.
    *   Once the action finishes, your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## Local Development

1.  Clone the repository.
2.  Run `npm install`.
3.  Run `npm run dev` to start the local development server.
4.  Run `npm run build` to create a production build in the `dist/` directory.
