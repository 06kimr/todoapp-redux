describe("todo", () => {
  it("todo 아이템을 추가하고, 상태를 변경할 수 있다다", () => {
    cy.visit("/");

    //리스트 로딩 기다리기
    cy.findAllByRole("checkbox").should("have.length.gte", 1);

    //아이템 추가
    cy.findByRole("textbox").as("todoInput");
    cy.get("@todoInput").type("새로운 할 일 추가");
    cy.findByRole("button", { name: /추가/ }).click();
    cy.get("@todoInput").should("have.value", '');

    //아이템 확인
    cy.findByText("새로운 할 일 추가").should("exist").as("todoItem");

    //아이템 상태 변경
    cy.get("@todoItem").click();
    cy.findByLabelText("새로운 할 일 추가").should("be.checked");
  });
});
