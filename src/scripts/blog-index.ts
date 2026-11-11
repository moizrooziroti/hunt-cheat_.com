/** Blog index: category filters, ?q= search, Starwind sort select. */

function mountBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const resultsCountEl = document.getElementById('blog-results-count');
  const sortRoot = document.getElementById('blog-sort-select');
  const searchInput = document.getElementById('blog-search') as HTMLInputElement | null;
  const featuredWrap = document.querySelector<HTMLElement>('[data-blog-featured]');
  const featuredCard = featuredWrap?.querySelector<HTMLElement>('[data-blog-card]');
  if (!grid) return;
  if (grid.dataset.blogIndexInit === '1') return;
  grid.dataset.blogIndexInit = '1';

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');
  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');
  const sortInput = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');

  let currentSort =
    sortInput?.value || getSortSelectRoot()?.getAttribute('data-value') || 'newest';

  const getQuery = () => searchInput?.value.trim().toLowerCase() ?? '';

  const syncQueryToUrl = (q: string) => {
    const url = new URL(window.location.href);
    if (q) url.searchParams.set('q', q);
    else url.searchParams.delete('q');
    const next = `${url.pathname}${url.search}${url.hash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
      window.history.replaceState(null, '', next);
    }
  };

  const readQueryFromUrl = () => {
    const q = new URLSearchParams(window.location.search).get('q')?.trim() ?? '';
    if (searchInput && searchInput.value !== q) searchInput.value = q;
    return q.toLowerCase();
  };

  const matchesSearch = (el: HTMLElement, q: string) => {
    if (!q) return true;
    const haystack = el.getAttribute('data-blog-search') ?? '';
    return haystack.toLowerCase().includes(q);
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    const titleA = (a.getAttribute('data-title') ?? '').toLowerCase();
    const titleB = (b.getAttribute('data-title') ?? '').toLowerCase();

    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    if (sort === 'title-asc') return titleA.localeCompare(titleB);
    if (sort === 'title-desc') return titleB.localeCompare(titleA);
    return tsB - tsA;
  };

  const setVisible = (el: HTMLElement, match: boolean) => {
    el.classList.toggle('hidden', !match);
    el.toggleAttribute('hidden', !match);
  };

  const apply = (sortOverride?: string) => {
    const tag = activeTag();
    const sort = sortOverride ?? currentSort;
    currentSort = sort;
    const q = getQuery();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;

    if (featuredWrap && featuredCard) {
      const tagMatch = tag === 'all' || featuredCard.getAttribute('data-tag') === tag;
      const searchMatch = matchesSearch(featuredCard, q);
      const show = tagMatch && searchMatch;
      setVisible(featuredWrap, show);
      if (show) visibleCount += 1;
    }

    items.forEach((el) => {
      const tagMatch = tag === 'all' || el.getAttribute('data-tag') === tag;
      const searchMatch = matchesSearch(el, q);
      const match = tagMatch && searchMatch;
      setVisible(el, match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.toggleAttribute('hidden', visibleCount > 0);
      emptyEl.textContent = q ? 'No articles match this search.' : emptyMessage;
    }

    if (resultsCountEl) {
      if (q) {
        resultsCountEl.classList.remove('hidden');
        resultsCountEl.textContent = `${visibleCount} article(s) match “${searchInput?.value.trim() ?? q}”.`;
      } else {
        resultsCountEl.classList.add('hidden');
        resultsCountEl.textContent = '';
      }
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  const onSortChange = (event: Event) => {
    if (!(event instanceof CustomEvent)) return;
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target !== root && !root.contains(target)) return;

    const detail = event.detail as { value?: unknown } | null;
    const next =
      typeof detail?.value === 'string' && detail.value
        ? detail.value
        : sortInput?.value || currentSort;

    apply(next);
  };

  document.addEventListener('starwind:value-change', onSortChange);
  sortInput?.addEventListener('change', () => apply(sortInput.value || 'newest'));

  let searchTimer: ReturnType<typeof setTimeout> | undefined;
  const onSearchInput = () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      syncQueryToUrl(searchInput!.value.trim());
      apply();
    }, 150);
  };

  searchInput?.addEventListener('input', onSearchInput);
  searchInput?.addEventListener('search', () => {
    syncQueryToUrl(searchInput.value.trim());
    apply();
  });

  readQueryFromUrl();
  requestAnimationFrame(() => apply());
  window.setTimeout(() => apply(), 0);
}

export function setupBlogIndexFromDom(emptyMessage: string) {
  const run = () => mountBlogIndexFilters(emptyMessage);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  document.addEventListener('astro:page-load', () => run());
}

/** @deprecated Use setupBlogIndexFromDom */
export const initBlogIndexFilters = setupBlogIndexFromDom;
