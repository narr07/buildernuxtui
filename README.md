# NuxtUI Studio - Visual Drag & Drop Builder for Nuxt 4 & Nuxt UI v4

A modern, high-performance visual website builder powered by **Nuxt 4**, **@nuxt/ui (v4)**, and **Tailwind CSS v4**.

![NuxtUI Studio](https://raw.githubusercontent.com/nuxt/ui/main/docs/public/social-preview.png)

## ✨ Features

- 🧩 **20+ Nuxt UI v4 Components**:
  - **Layout & Structure**: Containers, CSS Grid (1-6 cols), Flexbox, UCard, USeparator.
  - **Typography & Elements**: Heading (H1-H6), Paragraphs, UButton, UBadge, UAvatar, UChip, UIcon, UKbd.
  - **Forms & Inputs**: UInput, UTextarea, USwitch, UCheckbox, USlider.
  - **Data & Feedback**: UAlert, UProgress, Stat Cards, Feature Cards, Pricing Cards, Testimonial Cards.
  - **Prebuilt Sections**: Hero Section, Feature Grid, Pricing Grid, FAQ, Footer.
- 🎨 **Visual Canvas & Inspector**:
  - Drag and drop components directly onto the canvas or into nested containers.
  - Live selection outline with floating element toolbar (move up, move down, duplicate, delete, select parent).
  - Responsive Viewport Switcher (Desktop 100%, Laptop 1024px, Tablet 768px, Mobile 375px).
  - Fine-grained Property & Layout Inspector (spacing, padding, margins, shadows, border-radius, background, custom Tailwind CSS classes).
- 🌲 **Layer Tree & Hierarchy Manager**:
  - Visual nested tree of all elements on the canvas for instant selection and structural navigation.
- 📑 **Pre-built Templates**:
  - SaaS Modern Landing Page
  - Pricing & Testimonials Showcase
  - Analytics & Metric Dashboard
- ⚡ **Production Code Generator & Export**:
  - One-click copy or download clean, formatted Nuxt 4 `<template>` Vue SFC code.
  - Export & Import complete design schemas in JSON format.
- 🌓 **Dark & Light Mode**:
  - Seamless dark and light theme switching with Nuxt UI color tokens.
- ⌨️ **Keyboard Shortcuts**:
  - `Ctrl+Z`: Undo
  - `Ctrl+Y` / `Ctrl+Shift+Z`: Redo
  - `Delete` / `Backspace`: Remove selected element
  - `Esc`: Deselect

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) (v1.2+) or Node.js (v20+)

### Setup & Development

```bash
# Install dependencies
bun install

# Start local dev server
bun run dev

# Build for production
bun run build
```

Open [http://localhost:3000](http://localhost:3000) to start building with Nuxt UI.

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com)
- **UI Components**: [@nuxt/ui v4](https://ui.nuxt.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [@nuxt/icon](https://github.com/nuxt/icon) + Lucide Icons
- **Composables**: [@vueuse/core](https://vueuse.org)
- **Package Manager**: [Bun](https://bun.sh)

## 📄 License

MIT
