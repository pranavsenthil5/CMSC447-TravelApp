
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
    console.log("GET called");
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Check if we have a session
    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (session) {
        var d = session.user.email
        console.log(d)

        return NextResponse.json({ email: d })
    }

    else {
        return NextResponse.json({ email: 'None' })
    }
}

