// src/composables/useValidationRules.js
export function useValidationRules () {
  return {
    isRequired: (v: any) => (!!v && v !== '<p><br></p>') || 'Field is required',
    isNotEmpty: (v: any[]) => (v && v.length > 0) || 'Please select at least one option',
    minLength: (n: number) => (v: string) =>
      (v && v.replace(/<[^>]*>/g, '').trim().length >= n) ||
      `Minimum ${n} characters`,
    isEmail: (v: string) => /.+@.+\..+/.test(v) || 'Invalid e-mail',
    isNumber: (v: number) => !Number.isNaN(v) || 'Should be a number',
  }
}
