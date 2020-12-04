// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

if (iOS) {
  // Just use the link of your app on the AppStore and replace https:// with itms://
  window.location.href = "https://apps.apple.com/fi/app/onni-ty%C3%B6aika/id1069896702?l=fi";
}