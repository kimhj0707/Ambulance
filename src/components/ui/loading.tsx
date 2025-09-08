"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function Loading({ size = "md", className, text }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2", 
    lg: "w-12 h-12 border-4"
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn(
        "animate-spin rounded-full border-gray-300 border-t-blue-600",
        sizeClasses[size]
      )} />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  )
}

interface LoadingOverlayProps extends LoadingProps {
  isVisible: boolean
}

export function LoadingOverlay({ isVisible, size = "lg", text = "로딩 중...", className }: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loading size={size} text={text} className={className} />
    </div>
  )
}

interface LoadingButtonProps {
  isLoading: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function LoadingButton({ isLoading, children, className, onClick, disabled }: LoadingButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && <Loading size="sm" />}
      {children}
    </button>
  )
}

export default Loading