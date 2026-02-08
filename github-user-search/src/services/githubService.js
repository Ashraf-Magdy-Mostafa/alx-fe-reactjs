import axios from "axios";

const API_BASE = "https://api.github.com";

function authHeaders() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/**
 * Fetch a single user's data by username.
 * Required function name: fetchUserData
 * Endpoint: https://api.github.com/users/{username}
 */
export async function fetchUserData(username) {
  if (!username) throw new Error("Username is required");
  const res = await axios.get(`${API_BASE}/users/${encodeURIComponent(username)}`, {
    headers: { ...authHeaders() },
  });
  return res.data;
}

/**
 * Advanced user search using GitHub Search API.
 * Endpoint: https://api.github.com/search/users?q={query}&page=1&per_page=20
 *
 * Note: Search API returns limited fields; we optionally hydrate details
 * (location, public_repos, etc.) by calling /users/{login} for each result.
 */
export async function searchUsersAdvanced({ query, location, minRepos, page = 1, perPage = 12 }) {
  const qParts = [];
  if (query?.trim()) qParts.push(query.trim());
  if (location?.trim()) qParts.push(`location:${location.trim()}`);
  if (minRepos !== "" && minRepos !== null && minRepos !== undefined) {
    const n = Number(minRepos);
    if (!Number.isNaN(n)) qParts.push(`repos:>=${n}`);
  }
  const q = qParts.join(" ").trim();
  if (!q) throw new Error("Please enter search criteria");

  const res = await axios.get(`${API_BASE}/search/users`, {
    params: { q, page, per_page: perPage },
    headers: { ...authHeaders() },
  });

  const items = res.data?.items ?? [];

  // Hydrate each user with full profile info (location, public_repos, followers...)
  // Keep it simple and safe: if a hydration call fails, fall back to basic item.
  const hydrated = await Promise.all(
    items.map(async (u) => {
      try {
        const full = await fetchUserData(u.login);
        return full;
      } catch {
        return u;
      }
    })
  );

  return {
    totalCount: res.data?.total_count ?? 0,
    items: hydrated,
    hasMore: page * perPage < Math.min(res.data?.total_count ?? 0, 1000), // GitHub search cap
  };
}
