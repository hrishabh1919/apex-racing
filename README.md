# 🏎️ Apex Racing - Interactive Web Experience

A sleek, modern website for **Apex Racing**, designed with a high-energy racing aesthetic. This project leverages advanced animations and an unconventional horizontal scrolling layout to create an immersive and memorable user experience.

## ✨ Features

* **Animated Splash Screen** - A custom "breathe" animation featuring the team logo that plays twice before revealing the site.

* **Horizontal Scrolling Showcase** - Content sections are presented in an engaging horizontal scroll format, powered by GSAP.

* **Interactive Custom Cursor** - A mouse-follower that enhances interactivity and adds a premium, high-tech feel.

* **Active Navigation Highlighting** - The header navigation automatically highlights the link corresponding to the section currently in view.

* **Ultra-Smooth Scrolling** - Silky-smooth scrolling experience implemented with the Lenis library.

* **Dynamic "Scroll to Top" Button** - A floating button appears after scrolling, allowing for easy navigation back to the start.

* **Responsive & Modern Design** - A clean layout optimized for a premium desktop experience.

## 🎨 Design Elements

* **Color Scheme**: A high-contrast palette with a dominant `--dark-bg` (#0a0a0a) and vibrant `--racing-red` (#ff0033) accents.

* **Typography**:

  * **Orbitron**: A bold, futuristic font used for all headings to capture the racing spirit.

  * **Poppins**: A clean and modern sans-serif for body text, ensuring excellent readability.

* **Textures**: A subtle carbon fiber texture is used throughout the background to enhance the motorsport theme.

## 🛠️ Technologies Used

* **HTML5** - Semantic markup for a robust structure.

* **CSS3** - Advanced styling with Custom Properties (Variables) for easy theming and complex animations.

* **JavaScript (ES6)** - Powers all the interactive features and animations.

* **GSAP (GreenSock Animation Platform)** - Used for the powerful horizontal scroll and ScrollTrigger-based animations.

* **Lenis** - For a smooth, high-performance scrolling experience.

## 📁 Project Structure

```
apex-racing-website/
├── index.html          # The main HTML file
└── /images/
    └── logo.png        # Logo used in the splash screen
└── README.md           # This file


```

## 🚀 Getting Started

1. **Clone or download** the project repository.

2. Ensure you have an `images` folder with `logo.png` inside it at the same level as `index.html`.

3. **Open** `index.html` in a modern web browser like Chrome or Firefox.

## 🎬 Animation Details

* **Splash Screen**: The logo breathes in and out twice over 3 seconds before fading out.

* **Header**: Slides down into view after the splash screen animation completes.

* **Horizontal Scroll**: The main content panels are pinned and moved horizontally based on the user's vertical scroll position, creating a unique narrative flow.

* **Active Navigation**: GSAP's ScrollTrigger monitors the position of each content panel to apply an `.active` class to the corresponding navigation link.

## 🎨 Customization

The project uses CSS custom properties for easy modification of the core theme. You can adjust these values in the `:root` selector at the top of the `<style>` tag.

```
:root {
  --racing-red: #ff0033;
  --dark-bg: #0a0a0a;
  --light-bg: #111;
  --text-light: #e0e0e0;
  --text-medium: #888;
}


```

## 📄 License

* **Code**: This project is open source and can be used for educational or personal purposes.

* **Assets**: The Apex Racing logo and content are specific to the project.

**Happy Racing! 🏁**

*Built with a passion for interactive design and motorsport aesthetics.*
