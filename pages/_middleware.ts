import { verify } from "@tsndr/cloudflare-worker-jwt"
import { NextRequest, NextResponse } from "next/server"

const secret = process.env.SECRET

export function middleware(req: NextRequest): NextResponse | null {
    const { cookies } = req

    const jwt = cookies.token

    const { pathname, origin } = req.nextUrl

    if (pathname === 'home/[id]') {
        if (jwt === undefined) {
            return NextResponse.rewrite(`${origin}/login`)
        }   

        try {
            verify(jwt, secret as string)

            return NextResponse.next()
        } catch (err) {
            return NextResponse.rewrite(`${origin}/login`)
            // return window.location.href = '/'
            // return NextResponse.rewrite(origin)

        }
    }

    return NextResponse.next()
}

export default middleware