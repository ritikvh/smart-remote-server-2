import { uiState } from "./state.js";

const MENU_ICONS = {
  overview: "fa-solid fa-earth-asia",
  location: "fa-solid fa-location-dot",
  amenities: "fa-solid fa-person-swimming",
  home_search: "fa-solid fa-building",
  more_options: "fa-solid fa-circle-plus",
  shortlisted_units: "fa-solid fa-heart",
  technical_specifications: "fa-solid fa-screwdriver-wrench",
};

export function renderMenuItems() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const items = Object.entries(uiState.data.filteredMenuItems);

  if (!items.length) return;

  sidebar.innerHTML = items
    .map(
      ([section, label], index) => `
      <div class="menu-item ${uiState.section === section ? "active" : ""}" data-section="${section}">
        <i class="${MENU_ICONS[section] || "fa-solid fa-circle"}"></i>
        <span>${label}</span>
      </div>
    `,
    )
    .join("");
}
