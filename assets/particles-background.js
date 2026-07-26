if (
  typeof particlesJS === "function" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 45, density: { enable: true, value_area: 900 } },
      color: { value: ["#9C4200", "#0E3386"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3.5, random: true },
      line_linked: {
        enable: true,
        distance: 170,
        color: "#0E3386",
        opacity: 0.3,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 1.4,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      // Listen on the page rather than the canvas, so links and controls stay clickable.
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}
