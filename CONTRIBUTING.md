# Contributing to AVEDOK

First off, thank you for considering contributing to AVEDOK! 🎉 It's people like you that make AVEDOK such a great platform for education.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guides](#style-guides)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@avedok.com](mailto:conduct@avedok.com).

### Our Pledge

We pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to a positive environment:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Git](https://git-scm.com/) - Version control
- [Node.js](https://nodejs.org/) v16+ (for development tools)
- A modern code editor ([VS Code](https://code.visualstudio.com/) recommended)
- A modern web browser for testing

### Fork and Clone

1. **Fork the repository** by clicking the Fork button on GitHub

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/avedok.git
   cd avedok
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/avedok/avedok.git
   ```

4. **Install dependencies** (optional, for development tools)
   ```bash
   npm install
   ```

---

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

**When reporting a bug, include:**
- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, device)

Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

### 💡 Suggesting Features

We love new ideas! Feature suggestions help us improve AVEDOK.

**When suggesting a feature:**
- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this feature would be useful
- Include mockups or examples if possible

Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

### 📝 Improving Documentation

Documentation improvements are always welcome:
- Fix typos or grammatical errors
- Add missing information
- Improve code examples
- Translate documentation

### 💻 Code Contributions

#### Types of Contributions We're Looking For

- 🐛 Bug fixes
- ✨ New features
- 🎨 UI/UX improvements
- ♿ Accessibility enhancements
- ⚡ Performance optimizations
- 📱 Mobile responsiveness
- 🧪 Test coverage
- 📖 Documentation

#### First Time Contributors

Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

---

## 🛠️ Development Setup

### Local Development

1. **Start a local server**
   ```bash
   # Option 1: Using npm (if package.json exists)
   npm run dev
   
   # Option 2: Using Python
   python -m http.server 8000
   
   # Option 3: Using npx
   npx serve .
   ```

2. **Open in browser**
   ```
   http://localhost:8000
   ```

### Project Structure

```
avedok/
├── index.html          # Main landing page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── *.html              # Additional pages
└── .github/            # GitHub templates
```

### Testing Your Changes

- ✅ Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- ✅ Test on mobile devices or emulators
- ✅ Check accessibility with screen reader
- ✅ Validate HTML at [validator.w3.org](https://validator.w3.org/)
- ✅ Test with keyboard-only navigation
- ✅ Check for console errors

---

## 🎨 Style Guides

### HTML Style Guide

```html
<!-- Use semantic HTML -->
<article class="card">
  <header>
    <h2>Title</h2>
  </header>
  <p>Content...</p>
</article>

<!-- Use proper indentation (2 spaces) -->
<div class="container">
  <section class="hero">
    <h1>Heading</h1>
  </section>
</div>

<!-- Include alt text for images -->
<img src="image.jpg" alt="Descriptive alt text" loading="lazy">

<!-- Use aria attributes for accessibility -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
```

### CSS Style Guide

```css
/* Use CSS custom properties */
:root {
  --orange-500: #FF8B38;
  --radius-lg: 18px;
}

/* Use BEM-like naming (simplified) */
.card { }
.card-header { }
.card-content { }
.card-footer { }

/* Mobile-first approach */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Group related properties */
.button {
  /* Positioning */
  position: relative;
  display: inline-flex;
  
  /* Box Model */
  padding: 0.85rem 1.25rem;
  margin: 0;
  
  /* Visual */
  background: var(--orange-500);
  border-radius: 999px;
  
  /* Typography */
  font-weight: 700;
  
  /* Other */
  cursor: pointer;
  transition: all 0.15s ease;
}
```

### JavaScript Style Guide

```javascript
// Use strict mode
'use strict';

// Use const and let, not var
const MAX_ITEMS = 10;
let currentIndex = 0;

// Use arrow functions for callbacks
array.forEach(item => {
  console.log(item);
});

// Use template literals
const message = `Hello, ${name}!`;

// Use async/await for promises
async function fetchData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Document functions
/**
 * Toggles the accordion open/closed state
 * @param {HTMLElement} accordion - The accordion element
 */
function toggleAccordion(accordion) {
  accordion.classList.toggle('open');
}
```

---

## 📝 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, missing semicolons, etc. |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding missing tests |
| `chore` | Build process or auxiliary tool changes |

### Examples

```bash
# Feature
feat(hero): add animated statistics counter

# Bug fix
fix(navigation): correct mobile menu z-index issue

# Documentation
docs(readme): add installation instructions

# Style
style(css): format button styles consistently

# Refactor
refactor(accordion): simplify toggle logic
```

---

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Update your fork with the latest upstream changes
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. ✅ Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. ✅ Make your changes following our style guides

4. ✅ Test your changes thoroughly

5. ✅ Commit your changes with descriptive messages

### Submitting

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template** completely

4. **Request review** from maintainers

### PR Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation accordingly
- [ ] My changes generate no new warnings
- [ ] I have tested my changes in multiple browsers
- [ ] I have tested accessibility features

### Review Process

1. **Automated checks** must pass
2. **At least one maintainer** must approve
3. **Address feedback** promptly and professionally
4. **Squash commits** if requested before merge

---

## 👥 Community

### Get Help

- 💬 [GitHub Discussions](https://github.com/avedok/avedok/discussions)
- 🐦 [Twitter](https://twitter.com/avedok)
- 📧 [Email](mailto:hello@avedok.com)

### Stay Updated

- ⭐ Star this repo to show support
- 👀 Watch for updates
- 📰 Subscribe to our newsletter

### Recognition

Contributors who make significant contributions will be:
- Added to our CONTRIBUTORS.md file
- Featured in release notes
- Eligible for AVEDOK swag 🎁

---

## 🎉 Thank You!

Your contributions make AVEDOK better for students worldwide. Every contribution, no matter how small, is valued and appreciated.

<div align="center">
  <br>
  <img src="https://via.placeholder.com/400x100/FF8B38/FFFFFF?text=Thank+You+For+Contributing!" alt="Thank you" width="400">
  <br><br>
  <sub>Built with ❤️ by the AVEDOK Community</sub>
</div>
