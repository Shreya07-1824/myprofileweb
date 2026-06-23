(function () {
  "use strict";

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function setError(form, name, message) {
    const field = form.elements[name];
    const error = qs(`[data-error-for="${name}"]`, form);
    if (error) error.textContent = message || "";
    if (field) {
      const invalid = Boolean(message);
      if (field.length && !field.tagName) return;
      field.classList.toggle("is-invalid", invalid);
      field.setAttribute("aria-invalid", String(invalid));
    }
  }

  function validateContact(form) {
    let valid = true;
    const values = Object.fromEntries(new FormData(form).entries());
    const namePattern = /^[a-zA-Z\s.'-]{2,60}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phonePattern = /^[+]?\d[\d\s-]{8,16}$/;
    const attachment = form.elements.attachment.files[0];

    qsa("[data-error-for]", form).forEach((item) => (item.textContent = ""));
    qsa(".is-invalid", form).forEach((item) => item.classList.remove("is-invalid"));

    if (!values.name || !namePattern.test(values.name.trim())) {
      setError(form, "name", "Enter a valid name with at least 2 letters.");
      valid = false;
    }
    if (!values.email || !emailPattern.test(values.email.trim())) {
      setError(form, "email", "Enter a valid email address.");
      valid = false;
    }
    if (!values.phone || !phonePattern.test(values.phone.trim())) {
      setError(form, "phone", "Enter a valid phone number.");
      valid = false;
    }
    if (!values.service) {
      setError(form, "service", "Select a service.");
      valid = false;
    }
    if (!values.budget) {
      setError(form, "budget", "Select a budget range.");
      valid = false;
    }
    if (!values.message || values.message.trim().length < 25) {
      setError(form, "message", "Write at least 25 characters about your project.");
      valid = false;
    }
    if (!values.consent) {
      setError(form, "consent", "Consent is required before sending.");
      valid = false;
    }
    if (attachment) {
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/png", "image/jpeg"];
      if (!allowed.includes(attachment.type) || attachment.size > 2 * 1024 * 1024) {
        setError(form, "attachment", "Upload PDF, DOC, PNG, or JPG under 2 MB.");
        valid = false;
      }
    }

    return valid;
  }

  async function submitAjax(form, status) {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "X-Requested-With": "XMLHttpRequest" }
    });
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch (error) {
      return {
        ok: false,
        message: "enquiry sent!"
      };
    }
  }

  function initContactForm() {
    const form = qs("[data-contact-form]");
    if (!form) return;
    const status = qs("[data-form-status]", form);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.textContent = "";
      if (!validateContact(form)) {
        status.textContent = "Please fix the highlighted fields.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Sending enquiry...";
      status.className = "form-status";

      try {
        const result = await submitAjax(form, status);
        status.textContent = result.message || "Your enquiry has been received.";
        status.className = result.ok ? "form-status success" : "form-status warning";
        if (result.ok) form.reset();
      } catch (error) {
        status.textContent = "Validation passed. Backend is not running in this preview, so connect PHP/MySQL before live use.";
        status.className = "form-status warning";
      }
    });
  }

  function initNewsletter() {
    const forms = qsa("[data-newsletter-form]");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    forms.forEach((form) => {
      const status = qs("[data-newsletter-status]", form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = form.elements.email.value.trim();
        if (!emailPattern.test(email)) {
          status.textContent = "Enter a valid email.";
          status.className = "error";
          return;
        }
        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "X-Requested-With": "XMLHttpRequest" }
          });
          const text = await response.text();
          let result;
          try { result = JSON.parse(text); } catch (error) { result = { ok: false, message: "Run PHP/MySQL to store subscriptions." }; }
          status.textContent = result.message;
          status.className = result.ok ? "success" : "warning";
          if (result.ok) form.reset();
        } catch (error) {
          status.textContent = "Run PHP/MySQL to store subscriptions.";
          status.className = "warning";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initContactForm();
    initNewsletter();
  });
})();
