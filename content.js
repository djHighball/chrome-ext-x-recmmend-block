const hideRecommended = () => {
  const recommendedTab = document.querySelector('div[role="tablist"]');
  if (recommendedTab) {
  }
  const firstLink = recommendedTab.querySelectorAll("a")[0];
  if (firstLink) {
    firstLink.setAttribute("disabled", "true");
    firstLink.style.pointerEvents = "none"; // To prevent clicking
  }
};

// Run functions on page load
const observer = new MutationObserver(() => {
  hideRecommended();
});

observer.observe(document.body, { childList: true, subtree: true });
