# CI/CD Infrastructure

## Overview

This repository uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The infrastructure includes automated testing, linting, security scanning, and deployment to GitHub Pages.

## Workflows

### 1. CI Pipeline (`ci.yml`)

**Triggers:**
- Push to `main`, `develop`, or `copilot/**` branches
- Pull requests to `main` or `develop`
- Manual workflow dispatch

**Jobs:**

#### 🔍 Lint Code
- Runs ESLint on JavaScript files
- Validates HTML structure
- Reports code quality issues

#### 🔧 Build & Validate
- Installs dependencies
- Validates project structure
- Checks for required files (index.html, app.js, Style.css)
- Runs build validation

#### 🧪 Run Tests
- Executes basic validation tests
- Verifies Pi SDK integration
- Checks core functionality

#### 🔒 Security Scan
- Runs `npm audit` to check for vulnerabilities
- Uses TruffleHog to detect secrets
- Reports security findings

#### ✅ Validate Deployment Config
- Checks deployment configuration files
- Validates package.json structure
- Verifies Railway configuration

#### 📊 CI Status Report
- Generates comprehensive status report
- Posts summary comment on pull requests
- Provides links to workflow runs

### 2. Deploy to GitHub Pages (`deploy.yml`)

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Jobs:**

#### 🚀 Deploy
- Builds and validates the application
- Uploads site artifacts to GitHub Pages
- Deploys to production
- Generates deployment summary

## Local Development

### Running Tests Locally

```bash
# Install dependencies
npm install

# Run all checks
npm run validate  # Check project structure
npm run test      # Run basic tests
npm run lint      # Check code quality
npm run build     # Validate build

# Fix linting issues automatically
npm run lint:fix
```

### NPM Scripts

- **`npm start`** - Start local development server on port 3000
- **`npm run validate`** - Validate project structure and required files
- **`npm run test`** - Run basic validation tests
- **`npm run test:integration`** - Run integration tests (not yet implemented)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run lint:fix`** - Automatically fix linting issues
- **`npm run build`** - Validate and prepare for deployment

## Status Badges

The README includes status badges that show:
- CI Pipeline status
- Deployment status
- License information
- Version number
- Pi Network integration

Example:
```markdown
[![CI Pipeline](https://github.com/onenoly1010/Ai-forge-/actions/workflows/ci.yml/badge.svg)](https://github.com/onenoly1010/Ai-forge-/actions/workflows/ci.yml)
```

## Configuration Files

### `.eslintrc.json`
ESLint configuration for JavaScript code quality:
- Uses recommended ruleset
- Configured for browser environment
- Defines Pi SDK global
- Enforces semicolons and single quotes (as warnings)

### `.github/workflows/ci.yml`
Main CI pipeline configuration with parallel job execution for faster feedback.

### `.github/workflows/deploy.yml`
Deployment configuration for GitHub Pages with automatic deployment on main branch updates.

## Continuous Improvement

### Adding New Tests

To add new tests, update the test script in `package.json`:

```json
"test": "node test-script.js"
```

Or create a proper test framework:

```bash
npm install --save-dev jest
```

Then update package.json:
```json
"test": "jest"
```

### Adding New Linting Rules

Edit `.eslintrc.json` to add or modify rules:

```json
{
  "rules": {
    "new-rule": "error"
  }
}
```

### Extending CI Pipeline

To add new jobs, edit `.github/workflows/ci.yml`:

```yaml
new-job:
  name: 🆕 New Job
  runs-on: ubuntu-latest
  steps:
    - name: Checkout code
      uses: actions/checkout@v4
    - name: Run new checks
      run: npm run new-check
```

## Security

### Secrets Scanning
The CI pipeline includes TruffleHog to detect accidentally committed secrets. If secrets are found:
1. The pipeline will fail
2. Rotate the compromised credentials immediately
3. Remove secrets from git history
4. Use environment variables or GitHub Secrets instead

### Dependency Auditing
`npm audit` runs on every CI execution. To fix vulnerabilities:

```bash
# View audit report
npm audit

# Fix automatically (if possible)
npm audit fix

# For breaking changes
npm audit fix --force
```

## Monitoring

### CI Status
- View workflow runs: https://github.com/onenoly1010/Ai-forge-/actions
- CI Pipeline: https://github.com/onenoly1010/Ai-forge-/actions/workflows/ci.yml
- Deployments: https://github.com/onenoly1010/Ai-forge-/actions/workflows/deploy.yml

### Notifications
GitHub Actions will:
- ✅ Post success/failure status on commits
- 📊 Comment on pull requests with CI results
- 🔔 Send email notifications for failures (if configured)

### Deployment Status
- Production URL: https://onenoly1010.github.io/Ai-forge-/
- Deployment logs available in GitHub Actions
- Each deployment generates a summary with:
  - Site URL
  - Commit SHA
  - Branch name
  - Timestamp

## Troubleshooting

### CI Pipeline Failures

**Issue: Linting errors**
```bash
# Fix automatically
npm run lint:fix

# Or review and fix manually
npm run lint
```

**Issue: Test failures**
```bash
# Run tests locally to debug
npm test

# Check for missing files
npm run validate
```

**Issue: Build failures**
```bash
# Validate project structure
npm run build

# Check for missing dependencies
npm install
```

**Issue: Security vulnerabilities**
```bash
# Check vulnerabilities
npm audit

# Fix automatically
npm audit fix
```

### Deployment Failures

**Issue: GitHub Pages deployment workflow fails immediately**

This is the most common issue. The workflow requires GitHub Pages to be configured with "GitHub Actions" as the deployment source.

**Solution**: See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for detailed setup instructions.

Quick fix:
1. Go to Repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. Re-run the workflow

**Issue: GitHub Pages not updating**
1. Check workflow run logs
2. Verify Pages is enabled in repository settings
3. Ensure proper permissions are set
4. Check if deployment artifact was created

**Issue: Site not accessible**
1. Verify the URL: https://onenoly1010.github.io/Ai-forge-/
2. Check GitHub Pages settings in repository
3. Wait a few minutes for DNS propagation
4. Clear browser cache

## Best Practices

1. **Always run tests locally** before pushing
2. **Keep dependencies updated** to avoid security issues
3. **Review CI logs** when failures occur
4. **Use feature branches** for development
5. **Squash commits** before merging to keep history clean
6. **Monitor deployment status** after merging to main
7. **Fix linting issues** promptly to maintain code quality

## Future Enhancements

Potential improvements to the CI/CD pipeline:

- [ ] Add comprehensive unit tests with Jest or Mocha
- [ ] Implement end-to-end testing with Playwright or Cypress
- [ ] Add code coverage reporting
- [ ] Implement automated dependency updates (Dependabot)
- [ ] Add performance testing
- [ ] Implement staging environment
- [ ] Add visual regression testing
- [ ] Integrate with external monitoring services
- [ ] Add automated changelog generation
- [ ] Implement automated release process

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [npm Scripts Documentation](https://docs.npmjs.com/cli/v9/using-npm/scripts)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Last Updated**: 2026-02-09  
**Maintained by**: Repository maintainers and contributors
