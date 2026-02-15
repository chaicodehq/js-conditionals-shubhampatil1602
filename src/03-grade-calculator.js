/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  if (typeof score !== "number" || score < 0 || score > 100) return "INVALID";

  let grade;
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    if (hasExtraCredit) {
      score += 5;
      grade = score > 89 ? "A" : "B";
    } else {
      grade = "B";
    }
  } else if (score >= 70 && score <= 79) {
    if (hasExtraCredit) {
      score += 5;
      grade = score > 79 ? "B" : "C";
    } else {
      grade = "C";
    }
  } else if (score >= 60 && score <= 69) {
    if (hasExtraCredit) {
      score += 5;
      grade = score > 69 ? "C" : "D";
    } else {
      grade = "D";
    }
  } else if (score >= 0 && score <= 59) {
    if (hasExtraCredit) {
      score += 5;
      grade = score > 59 ? "D" : "F";
    } else {
      grade = "F";
    }
  }

  return grade;
}
