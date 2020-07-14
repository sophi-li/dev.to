/**
 * This script looks for the onboarding task card, which is hidden by default,
 * and displays it if the user is created less than a week ago and hasn't closed
 * the task card yet.
 */

function initializeOnboardingTaskCard() {
  if (localStorage.getItem('task-card-closed') === 'yes') {
    return;
  }

  var taskCard = document.getElementsByClassName('onboarding-task-card')[0];
  if (taskCard == null) {
    return; // This guards against both a null and undefined taskCard.
  }

  const user = userData();
  if (!user) {
    return;
  }

  var createdAt = new Date(user.created_at);
  var now = new Date();
  var aWeekAgo = now.setDate(now.getDate() - 7);

  if (createdAt > aWeekAgo) {
    taskCard.style.display = 'block';
  }
}
