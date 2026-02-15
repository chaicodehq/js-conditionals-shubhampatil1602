/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (
    typeof billAmount !== "number" ||
    billAmount <= 0 ||
    typeof serviceRating !== "number" ||
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating >= 6
  ) {
    return null;
  }

  const rates = {
    1: 0.05,
    2: 0.1,
    3: 0.15,
    4: 0.2,
    5: 0.25,
  };

  const tipRate = rates[serviceRating];
  const tipAmount = billAmount * tipRate;
  const totalAmount = billAmount + tipAmount;

  return {
    tipPercentage: tipRate * 100,
    tipAmount: Number(tipAmount.toFixed(2)),
    totalAmount: Number(totalAmount.toFixed(2)),
  };

  // let tipPercentage, tipAmount;

  // switch (serviceRating) {
  //   case 1:
  //     tipPercentage = 0.05;
  //     tipAmount = billAmount * tipPercentage;
  //     break;
  //   case 2:
  //     tipPercentage = 0.1;
  //     tipAmount = billAmount * tipPercentage;
  //     break;
  //   case 3:
  //     tipPercentage = 0.15;
  //     tipAmount = billAmount * tipPercentage;
  //     break;
  //   case 4:
  //     tipPercentage = 0.2;
  //     tipAmount = billAmount * tipPercentage;
  //     break;
  //   case 5:
  //     tipPercentage = 0.25;
  //     tipAmount = billAmount * tipPercentage;
  //     break;
  //   default:
  //     return null;
  // }

  // return {
  //   tipPercentage: tipPercentage * 100,
  //   tipAmount: Number(tipAmount.toFixed(2)),
  //   totalAmount: Number((billAmount + tipAmount).toFixed(2)),
  // };
}
