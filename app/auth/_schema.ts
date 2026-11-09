import { z } from "zod"

export const passwordSchema = z
  .string({ error: "Password is required" })
  .min(8, { error: "Password must be at least 8 characters long" })
  .max(255, { error: "Password cannot exceed 255 characters" })
  .regex(/[A-Z]/, { error: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { error: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { error: "Must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { error: "Must contain at least one special character" });

export const usernameSchema = z
  .string({ error: "Username is required" })
  .min(3, { error: "Username must be at least 3 characters long" })
  .max(32, { error: "Username cannot exceed 32 characters" })
  .regex(/^[a-z0-9]+$/, { error: "Username can contain lowercase letters and numbers only" });

export const emailSchema = z
  .email({ error: "Invalid email address" })
  .max(320, { error: "Email cannot exceed 320 characters" });