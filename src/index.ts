const translations: Record<string, string> = {
  "Bad request.": "Whoopsie-daisy! Your request is a bit wonky.",
  "Unauthorized access.": "Access denied! This is a VIP-only party.",
  "Forbidden.": "You shall not pass! Forbidden territory ahead.",
  "Page not found.": "Oops, this page took a wrong turn at Albuquerque.",
  "Request timeout.": "Request tried to do the slow-motion moonwalk, timed out.",
  "Too many requests.": "Slow down, cowboy! Server needs a breather.",
  "Internal server error.": "Gremlins attacked our server, chaos ensued.",
  "Bad gateway.": "Gateway to another dimension acting up, try again.",
  "Service unavailable.": "Service took a vacation to Bermuda, back soon.",
  "Gateway timeout.": "Gateway lost its way, taking a timeout.",
  "Insufficient storage.": "Out of closet space, can't store your stuff.",
  "Network authentication required.": "Network needs a secret handshake, authenticate yourself!",
};

export const translateErrorMessage = (originalErrorMessage: string) => {
  if (originalErrorMessage in translations) {
    return translations[originalErrorMessage];
  } else {
    return "Oops, something went wrong. Error message lost in translation!";
  }
};
