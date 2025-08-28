# Project Template Guide

This guide explains how to use the `project-template.html` file to create new project pages for your portfolio. The template is based on the successful structure of the Dashboard Design Studio project page.

## Template Structure

The template follows the same layout and components as the dashboard project page:

### 1. **Navigation Bar**
- Fixed navbar with logo and hamburger menu
- Consistent across all pages

### 2. **Project Hero Section**
- Back button to portfolio
- Project title and subtitle
- Hero image placeholder

### 3. **Metrics Summary**
- 6 key metrics displayed in a grid
- Shows project impact and achievements

### 4. **Project Content (Two-Column Layout)**
- **Left Column**: Main content with project details
- **Right Column**: Sticky sidebar with project metadata

### 5. **Case Study Section**
- Left: Sticky navigation menu
- Right: Detailed case study content with sections

### 6. **Related Projects**
- Grid of 5 related project cards

### 7. **Footer**
- Consistent footer across all pages

## How to Use the Template

### Step 1: Copy the Template
```bash
cp project-template.html your-project-name.html
```

### Step 2: Replace Placeholders
The template uses `[PLACEHOLDER_NAME]` format for all customizable content. Replace these with your actual content:

#### Basic Project Information
- `[PROJECT_TITLE]` - Your project title
- `[PROJECT_SUBTITLE]` - Brief project description
- `[COMPANY_NAME]` - Company name
- `[PROJECT_CATEGORY]` - Project type (e.g., "SaaS Dashboard", "Mobile App")
- `[ROLE]` - Your role in the project
- `[DATE]` - Project timeline

#### Metrics Section
Replace the 6 metric placeholders:
- `[METRIC_1_NUMBER]` and `[METRIC_1_DESCRIPTION]`
- `[METRIC_2_NUMBER]` and `[METRIC_2_DESCRIPTION]`
- ... and so on

#### Project Content Sections
- `[PROJECT_OVERVIEW_DESCRIPTION]` - Main project description
- `[FEATURE_DESCRIPTION]` - What the feature does
- `[PROBLEM_DESCRIPTION]` - The problem being solved
- `[PROBLEM_1_TITLE]` and `[PROBLEM_1_DESCRIPTION]` - Specific problems
- ... and so on for all 4 problems

#### Design Sprint Section
- `[DESIGN_SPRINT_OVERVIEW]` - Overview of the design process
- `[SPRINT_1_TITLE]` and `[SPRINT_1_DESCRIPTION]` - Each sprint phase
- ... and so on for all 5 sprints

#### Outcome Section
- `[OUTCOME_DESCRIPTION]` - What was achieved
- `[OUTCOME_CONTEXT]` - Additional context
- `[DELIVERABLE_1_TITLE]` and `[DELIVERABLE_1_DESCRIPTION]` - Key deliverables
- ... and so on for all 5 deliverables

#### Case Study Navigation
- `[SECTION_1_TITLE]` through `[SECTION_4_TITLE]` - Custom section titles
- `[SECTION_1_DESCRIPTION]` through `[SECTION_4_DESCRIPTION]` - Section descriptions
- `[CASE_STUDY_OVERVIEW]` - Overview of the case study

#### Before/After Section
- `[BEFORE_DESCRIPTION]` - Description of the old state
- `[AFTER_DESCRIPTION]` - Description of the new state

#### Key Learnings
- `[LEARNING_1_TITLE]` and `[LEARNING_1_DESCRIPTION]` - Key insights
- `[LEARNING_2_TITLE]` and `[LEARNING_2_DESCRIPTION]` - Additional insights

#### Related Projects
- `[PROJECT_1_TITLE]` and `[PROJECT_1_CATEGORY]` - Related project details
- ... and so on for all 5 related projects

### Step 3: Customize Images
Replace image placeholders with actual images:
- `[CONTEXT_IMAGE_PLACEHOLDER]` - Project context image
- `[TEAM_IMAGE_PLACEHOLDER]` - Team photo
- `[PROJECT_SCREENSHOTS_PLACEHOLDER]` - Project screenshots
- `[SECTION_1_IMAGE_PLACEHOLDER]` through `[SECTION_4_IMAGE_PLACEHOLDER]` - Section images
- `[BEFORE_IMAGE_PLACEHOLDER]` and `[AFTER_IMAGE_PLACEHOLDER]` - Before/after images

### Step 4: Update Navigation Links
Ensure all navigation links point to the correct pages:
- Back button: `href="index.html"`
- Footer links: `href="index.html#section-name"`

## Example: Creating a New Project Page

Let's say you want to create a page for a "Gen AI Design" project:

1. **Copy the template:**
   ```bash
   cp project-template.html gen-ai-design.html
   ```

2. **Replace key placeholders:**
   - `[PROJECT_TITLE]` → "Gen AI Design"
   - `[PROJECT_SUBTITLE]` → "Led the design of an enterprise SaaS Gen-AI interface that allows users to generate and customize content through natural language prompts."
   - `[COMPANY_NAME]` → "TechCorp"
   - `[PROJECT_CATEGORY]` → "Enterprise SaaS Gen-AI Design"
   - `[ROLE]` → "Senior Product Designer"

3. **Fill in metrics:**
   - `[METRIC_1_NUMBER]` → "50+"
   - `[METRIC_1_DESCRIPTION]` → "AI components designed with natural language processing capabilities"

4. **Continue with all sections...**

## Tips for Success

### 1. **Consistent Structure**
- Keep the same layout and component structure
- Maintain the two-column layout for project content
- Use the sticky sidebar for metadata

### 2. **Content Organization**
- Start with a clear problem statement
- Show the design process through sprints
- Highlight key deliverables and outcomes
- Include before/after comparisons

### 3. **Visual Hierarchy**
- Use the existing CSS classes for consistent styling
- Maintain the gradient backgrounds and rounded corners
- Keep placeholder images until you have actual screenshots

### 4. **Navigation**
- Update the case study navigation to match your project's sections
- Ensure all internal links work correctly
- Test the back button functionality

### 5. **Related Projects**
- Choose 5 related projects that complement the current project
- Update the related projects grid with actual project names and categories

## CSS Classes Available

The template uses these CSS classes (already defined in `styles.css`):

- `.project-hero` - Hero section styling
- `.metrics-summary` - Metrics grid styling
- `.project-content-wrapper` - Main content wrapper
- `.project-content-full` - Two-column layout
- `.project-content-main` - Left column content
- `.project-content-sidebar` - Right column sidebar
- `.case-study` - Case study section
- `.case-study-nav` - Left navigation
- `.case-study-content` - Right content area
- `.related-projects` - Related projects section

## File Structure

After creating new project pages, your structure should look like:
```
Portfolio/
├── index.html
├── dashboard-design-studio.html
├── gen-ai-design.html
├── design-system.html
├── deets-app.html
├── deepslice-pizza.html
├── project-template.html
├── PROJECT_TEMPLATE_GUIDE.md
├── styles.css
└── script.js
```

## Next Steps

1. Create your first project page using this template
2. Customize the content for your specific project
3. Add actual images and screenshots
4. Test the navigation and links
5. Repeat for additional projects

The template ensures consistency across all your project pages while allowing for easy customization of content and imagery. 