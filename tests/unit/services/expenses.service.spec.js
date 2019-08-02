import { expensesService } from "@/services";
import { http } from "@/services/http.service";

const mockExpense = {
  name: "Electricity",
  amount: 1234,
  category: "Bills",
  date: "2018-07-26",
  id: 3
};

describe("Service Expenses", () => {
  it("should post to add an expense", async () => {
    http.post = jest.fn();
    expensesService.addExpense(mockExpense);
    expect(http.post).toHaveBeenCalled();
  });
});
