export declare const CHECKOUT_URLS: {
  readonly huntShowdown: string;
  readonly ugc: string;
  readonly hwidSpoofer: string;
  readonly skinChanger: string;
  readonly cloudDma: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
