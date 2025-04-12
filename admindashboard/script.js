 // Get all edit and answer buttons
      const editButtons = document.querySelectorAll(".edit-btn");
      const answerButtons = document.querySelectorAll(".answer-btn");

      // Add event listeners to edit buttons
      editButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const faqItem = this.closest(".faq-item");
          const editMode = faqItem.querySelector(".edit-mode");

          // Show edit mode
          editMode.hidden = false;

          // Hide the normal actions
          this.parentElement.style.display = "none";
        });
      });

      // Add event listeners to answer buttons
      answerButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const faqItem = this.closest(".faq-item");
          const editMode = faqItem.querySelector(".edit-mode");

          // Show edit mode
          editMode.hidden = false;

          // Hide the normal actions
          this.parentElement.style.display = "none";
        });
      });

      // Add event listeners to cancel buttons
      document.querySelectorAll(".cancel-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const faqItem = this.closest(".faq-item");
          const editMode = faqItem.querySelector(".edit-mode");
          const actions = faqItem.querySelector(".faq-actions");

          // Hide edit mode
          editMode.hidden = true;

          // Show the normal actions
          actions.style.display = "flex";
        });
      });

      // Add event listeners to save buttons
      document.querySelectorAll(".save-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const faqItem = this.closest(".faq-item");
          const editMode = faqItem.querySelector(".edit-mode");
          const actions = faqItem.querySelector(".faq-actions");
          const textarea = editMode.querySelector(".edit-textarea");
          const answerElement = faqItem.querySelector(".faq-answer");

          // If there's an answer element, update its content
          if (answerElement) {
            // Simple text update - in a real app you'd handle HTML formatting
            answerElement.textContent = textarea.value;
          } else {
            // Create a new answer element if it doesn't exist
            const newAnswer = document.createElement("p");
            newAnswer.className = "faq-answer";
            newAnswer.textContent = textarea.value;

            // Insert before the actions div
            faqItem.insertBefore(newAnswer, actions);
          }

          // Hide edit mode
          editMode.hidden = true;

          // Show the normal actions
          actions.style.display = "flex";
        });
      });
