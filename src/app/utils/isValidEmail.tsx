export default function isValidEmail(email: string) {
  // This regex is using a simple pattern for basic email validation.
  // It checks for the general structure: characters@characters.domain
  // For more strict validation, you might need a more complex regex.
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}
