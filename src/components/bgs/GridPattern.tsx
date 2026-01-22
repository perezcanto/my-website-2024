import React from 'react'

export default function GridPattern() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c9c9c9_1px,transparent_1px),linear-gradient(to_bottom,#c9c9c9_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      {/* Diagonal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>

      {/* Gradient overlay for smooth transition at edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-70"></div>
    </div>
  )
}
