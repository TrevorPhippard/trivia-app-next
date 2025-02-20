export default async function Page() {
    // simulate loading time for 6 seconds
    await new Promise(resolve => setTimeout(resolve, 12000));

    return <h4>FOLDER 2 COMPONENT LOADED</h4>
}