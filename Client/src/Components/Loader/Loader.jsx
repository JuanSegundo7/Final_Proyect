import React from 'react'
import './Loader.css'

export default function () {
  return (
    <div class="jelly">
    <svg width="0" height="0" class="jelly-maker">
    <defs>
        <filter id="uib-jelly-ooze">
        <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="6.25"
            result="blur"
        />
        <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="ooze"
        />
        <feBlend in="SourceGraphic" in2="ooze" />
        </filter>
    </defs>
    </svg>
</div>
  )
}
