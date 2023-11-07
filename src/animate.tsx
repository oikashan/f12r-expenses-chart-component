export function animate(tl: gsap.core.Timeline) {
  // Animate everything in
  tl.fromTo(
    [
      "article > *",
      "h1",
      "svg",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "div",
      "p",
      "button",
    ],
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
    }
  );

  // Animate logo in
  // First the right circle
  tl.fromTo(
    "svg circle:nth-child(1)",
    {
      x: -12,
    },
    {
      x: 0,
      duration: 0.5,
    },
    "-=1"
  );

  // Then the left circle
  tl.fromTo(
    "svg circle:nth-child(2)",
    {
      x: 12,
    },
    {
      x: 0,
      duration: 0.5,
    },
    "-=1"
  );
}
