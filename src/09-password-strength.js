/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */

export function checkPasswordStrength(password) {
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  const chars = password.split("");

  const hasLength = password.length >= 8;

  const hasUpper = chars.some(
    (char) => char !== char.toLowerCase() && isNaN(char),
  );

  const hasLower = chars.some(
    (char) => char !== char.toUpperCase() && isNaN(char),
  );

  const hasNumber = chars.some((char) => char >= "0" && char <= "9");

  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const hasSpecial = chars.some((char) => specialChars.includes(char));

  const score =
    Number(hasLength) +
    Number(hasUpper) +
    Number(hasLower) +
    Number(hasNumber) +
    Number(hasSpecial);

  if (score <= 1) return "weak";
  if (score <= 3) return "medium";
  if (score === 4) return "strong";
  return "very strong";
}

// OR using regex

// export function checkPasswordStrength(password) {
//   if (typeof password !== "string" || password.length === 0) {
//     return "weak";
//   }

//   const hasLength = password.length >= 8 ? 1 : 0;
//   const hasUpper = /[A-Z]/.test(password) ? 1 : 0;
//   const hasLower = /[a-z]/.test(password) ? 1 : 0;
//   const hasNumber = /[0-9]/.test(password) ? 1 : 0;
//   const hasSpecial = /[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password) ? 1 : 0;

//   const score = hasLength + hasUpper + hasLower + hasNumber + hasSpecial;

//   if (score <= 1) return "weak";
//   if (score <= 3) return "medium";
//   if (score === 4) return "strong";
//   if (score === 5) return "very strong";
// }
