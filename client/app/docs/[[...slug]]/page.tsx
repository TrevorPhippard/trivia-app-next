import React from 'react'

// export default async function Docs({ params }: { params: { slug: string[] } }) {
//     const { slug } = params;
//     if (slug.length === 2) {
//         return (
//             <h1>view {slug[0]}</h1>
//         )
//     }
//     return (
//         <div>Matches any url with docs ex: <strong> ../../docs/../../</strong></div>
//     )
// }


export default async function Docs() {

    return (
        <div>Matches any url with docs ex: <strong> ../../docs/../../</strong></div>
    )
}