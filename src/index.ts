const translations: Record<string, string> = {
  // Informational Responses (1xx)
  "Continue": "Hold on tight, we're just getting started. The server is giving you a teaser.",
  "Switching Protocols": "Our server is trying out a new hobby - changing protocols. Hang in there!",
  "Processing": "The server is processing your request with the delicacy of a master chef preparing a five-course meal.",
  "Early Hints": "Hints, hints, and more hints! The server is dropping breadcrumbs to your treasure trove of data.",

  // Successful Responses (2xx)
  "OK": "Everything is A-OK! Your request was successful, like finding a unicorn in the backyard.",
  "Created": "Ta-da! Your request created something magical on the server.",
  "Accepted": "Your request has been accepted, like a warm hug from the server.",
  "Non-Authoritative Information": "The server's information is like your friend's unreliable directions—take it with a grain of salt.",
  "No Content": "There's nothing to see here, but at least it's a clean slate.",
  "Reset Content": "Think of it as a server reset button. Everything is fresh and ready for a new adventure.",
  "Partial Content": "You've got part of the treasure map! Keep going to find the rest.",
  "Multi-Status": "The server has multiple personalities, and it's trying to show them all at once.",
  "Already Reported": "You're so ahead of the game that the server is telling you things you already knew.",
  "IM Used": "The server just learned a new party trick, and it's showing it off.",

  // Redirections (3xx)
  "Multiple Choices": "Choices, choices everywhere, but which one should we choose? It's a multiple-choice adventure!",
  "Moved Permanently": "The server has decided to pack its bags and move permanently. Update your bookmarks!",
  "Found": "We found what you were looking for, but it's a secret. Shh, don't tell anyone.",
  "See Other": "Look over there! The server wants you to check out a different view.",
  "Not Modified": "No changes here. It's like reading your favorite book for the hundredth time.",
  "Use Proxy": "The server is sending you on a proxy treasure hunt. Follow the clues!",
  "Switch Proxy": "Our server is doing the hokey-pokey with proxies. It's time to switch!",
  "Temporary Redirect": "The server is taking a detour, but it'll be back on track soon.",
  "Permanent Redirect": "The server is serious about redirection. This is the new permanent address.",

  // Client Errors (4xx)
  "Bad Request": "Whoopsie-daisy! Your request is doing the cha-cha with the server, but they have two left feet.",
  "Unauthorized": "Access denied! This is a top-secret party, and you didn't bring the secret handshake or the funny hat.",
  "Payment Required": "The server is demanding payment in the form of virtual cookies. Time to pay up!",
  "Forbidden": "You shall not pass! Gandalf would be proud, but our server is just grumpy.",
  "Not Found": "Oops, this page took a wrong turn at Albuquerque.",
  "Method Not Allowed": "The server says, 'You can't do that!' Try a different dance move.",
  "Not Acceptable": "The server is picky about its requests. Yours didn't make the cut.",
  "Proxy Authentication Required": "The server wants to know if you're a real human or just another robot in disguise.",
  "Request Timeout": "Request tried to breakdance, but it got tired and decided to take a nap instead.",
  "Conflict": "There's a showdown happening on the server, and your request got caught in the crossfire.",
  "Gone": "The server is playing hide and seek, but it's really good at it. You might never find it.",
  "Length Required": "The server has a ruler, and your request didn't measure up.",
  "Precondition Failed": "The server had certain conditions, and your request didn't meet the criteria.",
  "Payload Too Large": "Your request is too heavy for our server to lift. Time to hit the gym!",
  "URI Too Long": "The server says your URL is longer than a Shakespearean soliloquy. Shorten it up!",
  "Unsupported Media Type": "The server is a picky eater and didn't like the format you served.",
  "Range Not Satisfiable": "The server is a puzzle master, and your request didn't fit the pieces.",
  "Expectation Failed": "The server had high expectations, but your request didn't meet them.",
  "I'm a teapot": "Our server is channeling its inner teapot and refusing to brew coffee.",
  "Misdirected Request": "The server is playing hide-and-seek with your request. Try looking elsewhere.",
  "Unprocessable Entity": "The server received your request, but it's in a language it doesn't understand.",
  "Locked": "The server is in lockdown mode, and your request can't come in.",
  "Failed Dependency": "The server is relying on another server, and that one let it down.",
  "Too Early": "You're ahead of your time! The server needs a time machine to handle your request.",
  "Upgrade Required": "The server is feeling outdated and wants you to upgrade your request.",
  "Precondition Required": "The server has some prerequisites, and your request didn't meet them.",
  "Too Many Requests": "Slow down, cowboy! The server needs a break.",
  "Request Header Fields Too Large": "Your request brought an encyclopedia of headers. Trim it down!",
  "Unavailable For Legal Reasons": "The server is taking a legal break. Check back later with a lawyer.",

  // Server Errors (5xx)
  "Internal Server Error": "Gremlins attacked our server again, and now they're demanding cookies as ransom.",
  "Not Implemented": "The server is waving a white flag. It doesn't know how to handle your request.",
  "Bad Gateway": "The server's gateway to another dimension is acting up. Maybe try the Stargate next time?",
  "Service Unavailable": "Our service is on a coffee break in Bermuda. Send a postcard, and it might return soon.",
  "Gateway Timeout": "The server's gateway got lost in the Bermuda Triangle. It'll be back... maybe.",
  "HTTP Version Not Supported": "The server is speaking a different language. Update your browser!",
  "Variant Also Negotiates": "The server is negotiating like a pro. It has multiple personalities to please.",
  "Insufficient Storage": "We're out of closet space, so we can't store your stuff. Time for some digital spring cleaning.",
  "Loop Detected": "The server is trapped in a loop. Send a rescue team with cookies!",
  "Not Extended": "The server decided not to extend an invitation to your request. It's an exclusive party.",
  "Network Authentication Required": "The server needs a secret handshake. Authenticate yourself to gain entry.",
};

export const translateErrorMessage = (originalErrorMessage: string) => {
  if (originalErrorMessage in translations) {
    return translations[originalErrorMessage];
  } else {
    return "Oops, something went wrong. Error message lost in translation!";
  }
};
