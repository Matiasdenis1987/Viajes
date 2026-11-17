"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const calculator = document.getElementById("trip-calculator");
  if (calculator) {
    calculator.addEventListener("submit", (event) => {
      event.preventDefault();
      const days = Number.parseInt(document.getElementById("days").value, 10);
      const people = Number.parseInt(document.getElementById("people").value, 10);
      const dailyCost = Number.parseInt(document.getElementById("budget-style").value, 10);
      const result = document.getElementById("calculator-result");

      if (!Number.isInteger(days) || !Number.isInteger(people) || days < 1 || people < 1) {
        result.textContent = "Ingresá al menos un día y una persona para calcular.";
        return;
      }

      const total = days * people * dailyCost;
      result.textContent = `Estimado orientativo: AR$ ${total.toLocaleString("es-AR")} para ${people} ${people === 1 ? "persona" : "personas"} durante ${days} ${days === 1 ? "día" : "días"}.`;
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const name = document.getElementById("name").value.trim();
      document.getElementById("form-feedback").textContent =
        `¡Gracias, ${name}! Tu idea quedó lista en esta demostración. El formulario no envía datos.`;
      contactForm.reset();
    });
  }
});
