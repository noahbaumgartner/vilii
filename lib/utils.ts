export function getErrorStatesFromValidation(validationErrors: any[]) {
  return validationErrors.map((error: any) => {
    if (error.constraints) return Object.values(error.constraints)[0];
  });
}
