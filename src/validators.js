import * as yup from "yup"
import config from "./config.js"

export const validateEmail = yup.string().email().trim().label("E-mail")

export const validatePassword = yup
  .string()
  .min(8)
  .matches(/\W/, "Password must contain at least a special character")
  .label("Password")

export const validateUsername = yup
  .string()
  .min(2)
  .max(15)
  .matches(
    /^[a-z][a-z0-9._]*/,
    "Username must contain only letters, numbers, '.' and '_'"
  )
  .trim()
  .label("Username")

export const validateDisplayName = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("Display Name")

export const validateLimit = yup
  .number()
  .min(config.view.results.minLimit)
  .max(config.view.results.maxLimit)
  .integer()
  .default(config.view.results.defaultLimit)
  .label("Pagination limit")

export const validateOffset = yup
  .number()
  .min(0)
  .integer()
  .default(0)
  .label("Pagination offset")

export const validateId = yup.number().integer().min(1).label("User ID")

export const validateEmailOrUsername = yup
  .string()
  .min(2)
  .trim()
  .label("Email or Username")

export const validateContent = yup.string().min(1).label("Content")

export const validatePostTitle = yup.string().min(1).label("Title")

export const validatePostContent = validateContent.label("Post content")

export const validatePublishedAt = yup.date().label("Publishing date")

export const validateSearch = yup.string().min(3).label("Search terms")

export const validateCommentContent = validateContent.label("Comment content")
