export default (expenses) => {
    return expenses.reduce((totalExpenseSum, expense) => {
        return totalExpenseSum + expense.amount;
    }, 0);
}