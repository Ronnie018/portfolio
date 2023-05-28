export type GenericError = Error | any;

export interface EmailValidationError extends GenericError {
  message: string;
};
