# Product Requirements Document (PRD) for Pratejra Landing Page

## 1. Overview

Pratejra is a landing page website for Pratejra/Shaivra, a company that provides purpose-built software tools and playbooks for NGOs, neighborhood leaders, and cultural stewards. The site emphasizes "softer software, shared stewardship" with a focus on human pace, grounded tech, and community collaboration.

## 2. Objectives

- Showcase Pratejra's services and approach
- Provide information about their process (Listen with care, Build with you, Leave you ready)
- Display their work through projects
- Allow visitors to contact them
- Navigate between different sections (Home, Philosophy, Allies)

## 3. Target Audience

- NGOs and non-profit organizations
- Community leaders
- Cultural stewards
- Potential clients seeking software solutions

## 4. Key Features

### 4.1 Hero Section
- Headline: "Softer software, shared stewardship."
- Subtitle: "natural interface · human pace"
- Description of services targeting NGOs and community stewards
- Process highlights (3 steps): Listen with care, Build with you, Leave you ready
- Call-to-action buttons: "See the playbook" (navigates to allies), "Write to us" (scrolls to contact)
- Visual card with meditation image, values grid (Grounded tech, Human pace, Shared stewardship), and promise statement

### 4.2 What We Do Section
- Impact Pulse component (displays impact metrics or pulse)
- Component Order Section (shows order of components or services)

### 4.3 Our Work Section
- Projects Carousel displaying various projects
- Projects can be internal (navigate to philosophy) or external (open in new tab)
- Uses project descriptions from hook

### 4.4 Our Approach Section
- Allies Playbook component
- Mission Objectives grid (4 objectives): What we show up for
- Objectives include numbers, titles, and descriptions

### 4.5 Contact Section
- Contact form or information for reaching out

### 4.6 Philosophy Section
- Detailed philosophy content (separate page/section)

### 4.7 Allies Call to Action
- Call to action for allies/partners
- Includes contact section

### 4.8 Navigation and Layout
- Navbar with active section tracking
- Footer with navigation options
- Shader background with gradients and grid patterns
- Responsive design for mobile, tablet, desktop

## 5. Technical Requirements

- Built with React 18, TypeScript
- Styling with Tailwind CSS
- Animations with Framer Motion
- Custom hooks for scroll animations, carousel auto-rotate, project descriptions
- UI components from shadcn/ui
- Responsive and accessible (ARIA labels, semantic HTML, focus management)
- State management for active sections with URL hash sync

## 6. Design Requirements

- Dark theme: slate-950 to emerald-950 gradients
- Emerald color accents (#10b981 and variants)
- Clean, natural layout with rounded corners and subtle borders
- Hover effects, transitions, and shadows
- Grid patterns and radial gradients for background
- Typography: bold headings, muted text for descriptions

## 7. Content Requirements

- Mission objectives sourced from constants/index.tsx
- Project data from useProjectDescriptions hook
- Images from constants (e.g., BUDDHA_MEDITATION)
- Copy focused on community, stewardship, and human-centered design

## 8. Success Metrics

- User engagement: time on site, section navigation
- Contact form submissions
- Project clicks and external link opens
- Mobile responsiveness and accessibility compliance