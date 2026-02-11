# GitHub Pages Setup Guide

## Issue: Deploy to GitHub Pages Workflow Failing

If you're seeing the "Deploy to GitHub Pages" workflow fail, it's likely because GitHub Pages is not configured to use GitHub Actions as the deployment source.

### The Problem

The deployment workflow (`.github/workflows/deploy.yml`) uses the `actions/deploy-pages@v4` action, which requires:

1. GitHub Pages to be **enabled** in repository settings
2. GitHub Pages **source** to be set to "GitHub Actions" (not "Deploy from a branch")
3. The `github-pages` environment to be available (automatically created when Pages is configured)

### The Solution

Follow these steps to enable GitHub Pages with GitHub Actions:

#### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (in the repository menu)
3. Scroll down to **Pages** (in the left sidebar)

#### Step 2: Configure Source

Under "Build and deployment":

1. Find the **Source** dropdown
2. Select **"GitHub Actions"** (NOT "Deploy from a branch")
   
   ![Source Selection](https://docs.github.com/assets/cb-47528/mw-1440/images/help/pages/github-actions-source.webp)

3. No need to save - it updates automatically

#### Step 3: Trigger Deployment

Once configured, you can deploy by:

- **Option A**: Push any commit to the `main` branch
- **Option B**: Manually trigger the workflow:
  1. Go to **Actions** tab
  2. Click "Deploy to GitHub Pages" workflow
  3. Click "Run workflow"
  4. Select `main` branch
  5. Click "Run workflow" button

#### Step 4: Verify Deployment

1. Go to the **Actions** tab
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, your site will be live at: `https://onenoly1010.github.io/Ai-forge-/`

## Alternative: Branch-Based Deployment

If you prefer not to use GitHub Actions, you can switch to branch-based deployment:

### Disable the Workflow

Either delete or disable `.github/workflows/deploy.yml`

### Configure Branch Deployment

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
3. Click **Save**

### Trade-offs

**GitHub Actions Deployment** (Current):
- ✅ Runs build validation before deployment
- ✅ Can add custom build steps
- ✅ Provides deployment status and history
- ❌ Requires proper configuration

**Branch-Based Deployment**:
- ✅ Simpler setup
- ✅ Automatic on every push
- ❌ No build validation
- ❌ Deploys everything in the branch (including .gitignore'd files if committed)

## Troubleshooting

### Error: "Resource not accessible by integration"

**Cause**: Repository permissions not configured correctly

**Solution**: 
1. Go to Settings → Actions → General
2. Under "Workflow permissions", ensure "Read and write permissions" is selected
3. Check "Allow GitHub Actions to create and approve pull requests"

### Error: "Artifact upload failed"

**Cause**: Artifact is too large (> 1 GB)

**Solution**: 
- Review what's being uploaded in the workflow
- Ensure `node_modules` is in `.gitignore` and not committed
- Check that only necessary files are included

### Deployment Succeeds But Site Shows 404

**Cause**: Repository visibility or Pages disabled

**Solution**:
1. Verify repository is public (or you have GitHub Pro/Team for private repos)
2. Check Settings → Pages shows "Your site is published at..."
3. Ensure `index.html` exists in the repository root

## Reference Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Publishing with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [Workflow File](/.github/workflows/deploy.yml)

## Support

For workflow-related issues, check:
- [Actions tab](https://github.com/onenoly1010/Ai-forge-/actions) for detailed logs
- Workflow runs for error messages
- Job logs for specific failure points
