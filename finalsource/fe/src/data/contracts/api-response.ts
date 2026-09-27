export interface SuccessResponse<T> {
  success: true
  message: string
  data: T
}

export interface ErrorResponse {
  success: false
  statusCode: number
  message: string | string[]
  timestamp: string
  path: string
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
