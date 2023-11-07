export function animateBars(tl: gsap.core.Timeline, percentages: number[]) {
  percentages.forEach((percentage, i) => {
    tl.fromTo(
      `.transaction:nth-child(${i + 1}) .bar`,
      {
        "--height": "5%",
      },
      {
        "--height": `${percentage}%`,
        duration: 0.25,
        ease: "power1.out",
      },
      "<"
    );
  });
}
