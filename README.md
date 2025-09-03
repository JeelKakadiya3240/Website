# 🚀 Jeel Kakadiya Portfolio Website

A modern, responsive portfolio website built with HTML, CSS (Tailwind), and JavaScript, featuring a comprehensive CI/CD pipeline for automated testing and deployment.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Typewriter effect, smooth scrolling, mobile menu
- **Professional Sections**: About, Experience, Skills, Projects, Contact
- **CI/CD Pipeline**: Automated testing, validation, and deployment
- **GitHub Pages**: Automatic deployment to live website

## 🏗️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (via CDN)
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages
- **Validation**: HTML, CSS, and JavaScript automated testing

## 🔧 CI/CD Pipeline

This project includes a comprehensive Continuous Integration/Continuous Deployment pipeline that automatically:

### 📋 Workflows

1. **HTML Validation** (`.github/workflows/html-validation.yml`)
   - Validates HTML syntax and structure
   - Checks for proper DOCTYPE and semantic tags
   - Ensures accessibility features (alt attributes, meta tags)

2. **CSS Validation** (`.github/workflows/css-validation.yml`)
   - Validates CSS syntax and best practices
   - Checks Tailwind CSS implementation
   - Verifies responsive design classes
   - Ensures accessibility features

3. **JavaScript Validation** (`.github/workflows/javascript-validation.yml`)
   - Validates JavaScript syntax
   - Checks for modern JavaScript features
   - Verifies functionality implementation
   - Ensures best practices

4. **Deployment** (`.github/workflows/deploy.yml`)
   - Automatically deploys to GitHub Pages
   - Validates website structure
   - Checks file sizes and optimization
   - Provides deployment verification

5. **Complete Test Suite** (`.github/workflows/test-suite.yml`)
   - Runs all validation checks together
   - Generates comprehensive test reports
   - Provides improvement recommendations

### 🚀 How It Works

1. **Push Code**: When you push code to the `main` or `master` branch
2. **Automated Triggers**: GitHub Actions automatically start the workflows
3. **Validation**: Each workflow runs its specific validation checks
4. **Deployment**: If all checks pass, the website is automatically deployed
5. **Feedback**: You get detailed reports and notifications

## 🛠️ Local Development

### Prerequisites
- Git
- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript

### Setup
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio_With_Ci_CD/Website
   ```

2. **Make changes** to your website files

3. **Test locally** by opening `index.html` in a browser

4. **Commit and push** to trigger CI/CD
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

## 📱 Website Structure

```
Website/
├── index.html              # Main HTML file
├── public/                 # Static assets
│   ├── profile.png        # Profile photo
│   ├── ASU-logo.png      # ASU logo
│   └── logo.gif          # Company logo
├── .github/workflows/     # CI/CD workflows
│   ├── html-validation.yml
│   ├── css-validation.yml
│   ├── javascript-validation.yml
│   ├── deploy.yml
│   └── test-suite.yml
└── README.md              # This file
```

## 🔍 What the CI/CD Pipeline Checks

### HTML Validation
- ✅ Proper DOCTYPE declaration
- ✅ Required HTML tags (html, head, body, title)
- ✅ Semantic HTML structure
- ✅ Image alt attributes for accessibility
- ✅ Meta tags (charset, viewport)

### CSS Validation
- ✅ Tailwind CSS CDN integration
- ✅ Responsive design classes (sm:, md:, lg:)
- ✅ Custom CSS implementation
- ✅ Accessibility features (focus states, hover effects)

### JavaScript Validation
- ✅ Syntax validation
- ✅ Functionality checks (typewriter, mobile menu, smooth scrolling)
- ✅ Modern JavaScript features (const/let, arrow functions)
- ✅ Event listener implementation
- ✅ Error handling

### Performance & Accessibility
- ✅ File size optimization
- ✅ Image optimization
- ✅ Semantic HTML tags
- ✅ ARIA labels
- ✅ Proper heading structure

## 🌐 Deployment

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as source
4. The deployment workflow will handle the rest automatically

### Manual Deployment
You can also manually trigger deployment:
1. Go to "Actions" tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## 📊 Monitoring & Feedback

### Workflow Status
- Check the "Actions" tab in your repository
- View detailed logs for each workflow
- Monitor deployment status

### Test Reports
- Comprehensive validation results
- Performance metrics
- Accessibility scores
- Improvement recommendations

## 🎯 Learning Outcomes

By implementing this CI/CD pipeline, you'll learn:

1. **GitHub Actions**: YAML configuration, workflow syntax
2. **Automated Testing**: HTML, CSS, and JavaScript validation
3. **Continuous Integration**: Automated quality checks on every push
4. **Continuous Deployment**: Automatic website updates
5. **DevOps Practices**: Automated workflows and monitoring

## 🔧 Customization

### Adding New Validations
1. Create a new workflow file in `.github/workflows/`
2. Define triggers and jobs
3. Add validation steps using shell commands or actions

### Modifying Existing Workflows
- Edit the YAML files to add/remove checks
- Customize validation rules
- Add new tools and dependencies

### Adding New Tools
```yaml
- name: Install new tool
  run: npm install -g your-tool-name

- name: Run validation
  run: your-tool-name your-files
```

## 🚨 Troubleshooting

### Common Issues
1. **Workflow fails**: Check the Actions tab for error logs
2. **Deployment issues**: Verify GitHub Pages settings
3. **Validation errors**: Review the specific validation step output

### Getting Help
- Check GitHub Actions documentation
- Review workflow logs for specific errors
- Test workflows locally if possible

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [HTML Validation](https://validator.w3.org/)
- [CSS Validation](https://jigsaw.w3.org/css-validator/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the CI/CD pipeline
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


