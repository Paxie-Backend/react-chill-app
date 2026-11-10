interface StoredUser {
  email: string;
  password: string;
}

const USERS_STORAGE_KEY = "chill_users";
const SESSION_STORAGE_KEY = "access_token";

function readUsers(): StoredUser[] {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  if (!storedUsers) {
    return [];
  }

  const users: unknown = JSON.parse(storedUsers);
  if (
    !Array.isArray(users) ||
    !users.every(
      (user) =>
        typeof user.email === "string" &&
        typeof user.password === "string",
    )
  ) {
    throw new Error("Stored user data is invalid.");
  }

  return users;
}

export const localAuth = {
  create(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    if (users.some((user) => user.email === normalizedEmail)) {
      return false;
    }

    users.push({ email: normalizedEmail, password });
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return true;
  },

  read(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const user = readUsers().find((storedUser) => storedUser.email === normalizedEmail);
    return Boolean(user && user.password === password);
  },

  createSession(): void {
    localStorage.setItem(SESSION_STORAGE_KEY, crypto.randomUUID());
  },

  deleteSession(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  },

  hasSession(): boolean {
    return Boolean(localStorage.getItem(SESSION_STORAGE_KEY));
  },
};
