// Function to replace an anchor element based on its text content
function replaceMintlifyLink() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.textContent.trim() === "Powered by Mintlify") {
      const newLink = document.createElement("a");
      newLink.href = "https://fillout.com";
      newLink.textContent = "® 2025 Restly, Inc. DBA Fillout";
      newLink.target = "_blank"; // Opens the link in a new tab
      newLink.rel = "noopener noreferrer"; // Security best practices for external links
      link.replaceWith(newLink);
    }
  });
}

// Call the function to replace the link
replaceMintlifyLink();
