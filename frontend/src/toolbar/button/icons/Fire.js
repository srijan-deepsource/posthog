import './Fire.scss'
import React from 'react'

const fireColors = {
    engaged: ['#FB4F0E', '#FE6D37', '#FCB811'],
    disengaged: ['#FF9770', '#FF6E37', '#FB4F0D'],
}

export function Fire({ engaged = false, animated = false, ...props }) {
    const colors = fireColors[engaged ? 'engaged' : 'disengaged']
    return (
        <svg
            className={`posthog-toolbar-icon-fire${animated ? ' animated' : ''}`}
            width="24"
            height="33"
            viewBox="0 0 24 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M23.8644 21.1755C23.8644 19.5827 23.3857 15.5878 22.7865 14.2077C22.1873 12.8271 18.9808 6.52866 19.0689 8.0222C19.1315 9.08411 17.1635 11.0837 17.1635 11.0837C17.1635 11.0837 15.7438 6.80167 13.4458 4.08618C10.6969 0.836918 5.96685 0.522954 6.08593 1.17394C6.21632 1.88564 6.99109 2.56957 7.29046 3.73221C7.59124 4.9019 7.4152 6.55078 7.13561 7.30391C6.32317 9.49032 4.71995 11.9728 3.64815 13.0168C2.57683 14.0608 1.7098 15.304 1.1106 16.6845C0.510924 18.0646 0.17955 19.5827 0.17955 21.1755C0.17955 22.7689 0.510924 24.2864 1.1106 25.667C1.7098 27.0475 2.57683 28.2907 3.64815 29.3347C4.71995 30.3787 5.99555 31.2232 7.41237 31.8073C8.82919 32.391 10.3872 32.7139 12.022 32.7139C13.6572 32.7139 15.2147 32.391 16.6316 31.8073C18.0484 31.2232 19.3245 30.3787 20.3958 29.3347C21.4676 28.2907 22.3346 27.0475 22.9338 25.667C23.533 24.2864 23.8644 22.7689 23.8644 21.1755Z"
                fill={colors[0]}
            />
            <path
                d="M18.8307 14.8311C17.9557 16.0018 17.5692 17.6139 16.1392 19.5113C15.3494 13.105 11.3127 9.44815 10.4645 8.366C9.61577 7.28339 10.1133 9.27258 9.2651 11.2034C8.2705 16.2352 -0.679909 21.1418 4.77648 29.0275C8.67626 34.6628 17.7688 33.8786 20.5064 27.5406C22.5418 22.8274 21.0369 18.8923 18.8307 14.8311Z"
                fill={colors[1]}
            />
            <path
                d="M18.6336 21.046C18.315 21.4724 16.7165 23.4842 16.4364 24.0575C16.1559 24.6304 15.4865 25.0611 14.4015 26.4445C13.8861 25.4678 13.5336 23.9761 13.4291 23.4127C13.0897 21.5774 13.0808 21.1528 12.5027 18.9843C11.8518 16.5428 11.1245 16.314 10.9485 15.0073C10.7936 13.8569 10.5757 14.7781 10.5117 15.2177C10.4476 15.6569 9.17626 18.3898 8.86748 19.093C7.72791 20.9918 7.90161 20.7165 6.67778 22.7862C5.45442 24.8559 4.81803 27.1854 6.80534 30.0576C8.22545 32.1099 10.5917 32.9934 12.852 32.7867C15.1118 32.5796 16.5244 31.9541 17.5214 29.6457C18.2627 27.9291 18.3079 26.9058 18.6336 25.5492C19.0135 23.9662 18.7692 22.2397 18.6336 21.046Z"
                fill={colors[2]}
            />
        </svg>
    )
}
