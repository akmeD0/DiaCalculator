import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={1250}
        height={350}
        viewBox="0 0 1250 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="75" cy="100" r="75" />
        <rect x="170" y="25" rx="20" ry="20" width="1080" height="150" />
        <circle cx="75" cy="265" r="75" />
        <rect x="170" y="190" rx="20" ry="20" width="1080" height="150" />
    </ContentLoader>
)

export default MyLoader