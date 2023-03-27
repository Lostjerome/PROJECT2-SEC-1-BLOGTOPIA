const scrollToTop = (isSmooth) => {
  window.scrollTo({
    top: 0,
    behavior: isSmooth ? "smooth" : "auto",
  });
};

// export the function
export { scrollToTop };
