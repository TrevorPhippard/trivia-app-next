export const dynamic = "force-static";

/**
 * 
 * @todo @neshca/cache-handler redis
 */

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString()})
}