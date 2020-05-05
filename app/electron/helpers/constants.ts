export enum CHANNELS {
  TO_MAIN = "TO_MAIN",
  FROM_MAIN = "FROM_MAIN",
}

export enum ACTIONS {
  ALWAYS_ON_TOP = "ALWAYS_ON_TOP",
  FULL_SCREEN = "FULL_SCREEN",
  MINIMIZE = "MINIMIZE",
  HIDE = "HIDE",
  SET_THEME = "SET_THEME",
  QUIT_INSTALL_UPDATES = "QUIT_INSTALL_UPDATES",
}

export enum UPDATES {
  AVAILABLE = "AVAILABLE",
  DOWNLOADING = "DOWNLOADING",
  DOWNLOADED = "DOWNLOADED",
}

export enum BLOCKER {
  DOMAINS_START = "###BLOCKED_DOMAINS_START",
  DOMAINS_END = "###BLOCKED_DOMAINS_END",
}